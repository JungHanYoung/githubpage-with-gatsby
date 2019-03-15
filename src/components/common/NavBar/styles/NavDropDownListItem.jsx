import styled from 'styled-components'
import { rhythm } from '../../../../utils/typography';


export default styled.li`
    background: none;
    padding: ${rhythm(1 / 3)} ${rhythm(1)};
    margin: 0;
    font-size: ${rhythm(2 / 3)};
    &:hover {
        background-color: #f0f0f0;
    }
    & + & {
        border-top: 1px solid #f0f0f0;
    }
`