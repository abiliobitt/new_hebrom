import styled from "styled-components"
import { PRIMARY, SECONDARY } from "../colors"

export const TextSectionContainer = styled.section`
    margin-top: 30px;
    margin-bottom: 30px;
`
export const TextLink = styled.a`
    display: block;
    width: 100%;
    padding-right: 15px;
    text-align: right;
    font-weight: bold;
    text-decoration: none;
    &.-primary {
        color: ${PRIMARY};
    }
    &.-secondary {
        color: ${SECONDARY};
    }
    @media (max-width: 768px) {
        padding: 0px;
    }
`
export const P = styled.p`
    padding-right: 15px;
    text-align: justify;
    @media (max-width: 768px) {
        padding: 0;
    }
`