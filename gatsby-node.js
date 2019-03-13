const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.category) {
      const category = node.frontmatter.category
      const categoryPath = `/category/${category}`
      createNodeField({ node, name: 'categoryPath', value: categoryPath })
      // console.log(node.frontmatter.category)
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                category
              }
              fields {
                slug
                category
              }
            }
          }
        }
      }
    `).then(result => {

    const categories = {}
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {

      const { title, date, category } = node.frontmatter

      if (!categories[category]) {
        categories[category] = {
          posts: []
        }
      }
      const thisCategory = categories[category]
      thisCategory.posts.push({ id: node.id, slug: node.fields.slug, title })
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 1 ? null : posts[index - 1]

      // createPage({
      //   path: `/category/${category}`,
      //   component: path.resolve('./src/templates/category.js'),
      //   context: {
      //     posts: thisCategory.posts
      //   }
      // })

      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.fields.slug,
          category: node.fields.category,
          previous,
          next
        }
      })
    })
    createCategoryPage(createPage, categories)
    // console.log(JSON.stringify(result, null, 4))
  })
}

function createCategoryPage(createPage, categories) {
  Object.keys(categories).forEach(category => {
    const posts = categories[category].posts
    createPage({
      path: `/category/${category}`,
      component: path.resolve('./src/templates/category.js'),
      context: {
        posts
      }
    })
  })
}