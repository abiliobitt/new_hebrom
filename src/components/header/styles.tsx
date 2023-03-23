import styled from "styled-components"
import { GRAY_SCALE_0, PRIMARY, PRIMARY_HOVER } from "../general/colors"

export const NavBarContainer = styled.nav`
    width: 100%;
    padding: 20px 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: ${PRIMARY}b0;
    position: fixed;
    z-index: 5;
`

export const Logo = styled.div`
    img {
        height: 80px;
    }
`

export const LiknsList = styled.ul`
    display: flex;
    margin-top: 35px;
    li {
        a {
            padding: 35px;
            color: ${GRAY_SCALE_0};
            text-decoration: none;
            &:hover {
                background: ${GRAY_SCALE_0}b0;
                color: ${PRIMARY_HOVER};
            }
        }
    }
`