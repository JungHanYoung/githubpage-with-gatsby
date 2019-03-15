const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const categoryImg = {
  react: 'react-logo.png',
  spring: 'spring-logo.jpg',
  javascript: 'javascript-logo.png',
  default: 'default_blog_cover.jpg'
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.category && Object.keys(categoryImg).includes(node.frontmatter.category)) {
      const category = node.frontmatter.category

      // const categoryPath = `/category/${category}`
      createNodeField({ node, name: 'categoryImg', value: categoryImg[category] })
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
              }
            }
          }
        }
      }
    `).then(result => {

    const categories = {}
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {
      const { title, category } = node.frontmatter

      if (!categories[category]) {
        categories[category] = {
          posts: []
        }
      }
      const thisCategory = categories[category]
      thisCategory.posts.push({ id: node.id, slug: node.fields.slug, title })
    })
    createCategoryPage(createPage, categories);

    posts.forEach(({ node }, index) => {

      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 1 ? null : posts[index - 1]

      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.fields.slug,
          category: node.frontmatter.category,
          previous,
          next
        }
      })
    })
    // createCategoryPage(createPage, categories)

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