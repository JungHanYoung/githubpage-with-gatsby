import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

import Search from './Search'
import SearchResult from './SearchResult';

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rhythm(1 / 2)} ${rhythm(1)};
`

const NavBarRight = styled.div`
    display: flex;
    align-items: center;
`

const LinkItem = styled.span`
    padding-right: ${rhythm(1 / 2)};
    position: relative;
`

const CategoryWrapper = styled.ul`
    display: ${props => props.hover ? 'block' : 'none'};
    margin: 0;
    padding: ${rhythm(1 / 2)};
    background: #fff;
    list-style: none;
    position: absolute;
    left: -${rhythm(1 / 2)};
    border: 1px solid #f0f0f0;
    z-index: 999;
`

const CategoryItem = styled.li`

`



export default ({ allPosts, categories }) => {

    const [keyword, setKeyword] = useState('')
    const [itemList, setItemList] = useState([])
    const [hoverActive, setHoverActive] = useState(false)
    const categoryLink = useRef();

    function _onChangeKeyword(word) {
        setKeyword(word)
        if (word.length > 2) {
            findPostByKeyword(word)
        } else {
            setItemList([])
        }
    }

    function findPostByKeyword(word) {
        const filteringPosts = allPosts.filter(post => post.node.frontmatter.title.toLowerCase().includes(word.toLowerCase()))
        const mapToProps = filteringPosts.map(post =>
            ({
                ...post.node.frontmatter,
                ...post.node.fields
            }))
        setItemList(mapToProps)
    }

    function _onBlurInput() {
        setItemList([])
    }

    function _onFocusInput() {
        findPostByKeyword(keyword)
    }

    useEffect(() => {
        const hover = () => setHoverActive(true)
        const blur = () => setHoverActive(false)
        categoryLink.current.addEventListener('mouseenter', hover)
        categoryLink.current.addEventListener('mouseleave', blur)
        return () => {
            categoryLink.current.removeEventListener('mouseenter', hover)
            categoryLink.current.removeEventListener('mouseleave', blur)
        }
    })

    return (
        <Wrapper>
            <Link to="/">Oneze`s blog</Link>
            <NavBarRight>
                <LinkItem ref={categoryLink}>
                    <span>Category?</span>
                    <CategoryWrapper hover={hoverActive}>
                        {categories.map(category =>
                            <CategoryItem key={`${category}`}>
                                <Link to={`/category/${category}`}>{category}</Link>
                            </CategoryItem>
                        )}
                    </CategoryWrapper>
                </LinkItem>
                <LinkItem>
                    <Link to="/about">
                        About Me
                    </Link>
                </LinkItem>
                <Search
                    keyword={keyword}
                    handler={_onChangeKeyword}
                    onBlur={_onBlurInput}
                    onFocus={_onFocusInput}
                />
            </NavBarRight>
            <SearchResult
                items={itemList}
            />
        </Wrapper>
    )
}