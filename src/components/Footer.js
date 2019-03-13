import React from 'react';
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Wrapper = styled.footer`
    border-top: 1px solid #0f0f0f;
    margin: 0 auto;
    padding: 0 ${rhythm(1)};
    @media (min-width: 1200px) {
        width: 1170px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 768px) {
        width: 750px;
    }
`

const Container = styled.div`
    padding: ${rhythm(1)} 0;
    display: flex;
    justify-content: center;
`

const FooterItem = styled.div`
    flex: 1;
    text-align: center;
`

export default () => (
    <Wrapper>
        <Container>
            <FooterItem>
                I want to be FullStack Developer
            </FooterItem>
            <FooterItem>
                JeongHanYoung
            </FooterItem>
            <FooterItem>
                <a href="https://github.com/jungHanYoung">
                    <i className="fab fa-github"></i>
                </a>
            </FooterItem>
        </Container>
    </Wrapper>
)