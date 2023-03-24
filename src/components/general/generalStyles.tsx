import styled from "styled-components"
import { GRAY_SCALE_0, PRIMARY, SECONDARY } from "./colors"

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        display: block;
    }
`

export const Half = styled.div`
    width: 50%;
    img {
        max-width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
    }
`

export const SectionTitle = styled.h1`
    font-size: 2.5em;
    font-weight: bold;
    color: ${GRAY_SCALE_0};
    padding: 15px;
    margin-bottom: 20px;
    &.-primary {
        background: ${PRIMARY}b0;
    }
    &.-secondary {
        background: ${SECONDARY}b0;
    }
    &.-center-text {
        text-align: center;
    }
`