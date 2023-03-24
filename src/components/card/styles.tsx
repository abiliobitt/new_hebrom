import styled from "styled-components"
import { GRAY_SCALE_400, PRIMARY, SECONDARY } from "../general/colors"

export const CardContainer = styled.div`
    max-width: 22%;
    box-sizing: border-box;
    border-radius: 16px;
    margin-bottom: 30px;
    img {
        width: 100%;
        border-radius: 16px 16px 0px 0px;
    }
    @media (max-width: 768px) {
        width: 90%;
        max-width: 100%;
        margin: 30px auto;
        img {
            width: 100%;
        }
    }
`
export const CardHeader = styled.div`
    --swiper-theme-color: ${PRIMARY};
    --swiper-navigation-size: 25px;
`
export const CardBody = styled.div`
    padding: 15px;
    border: 1px solid ${GRAY_SCALE_400};
    margin-top: -3px;
    border-radius: 0px 0px 16px 16px;
    h3 {
        font-weight: bold;
        margin: 10px 0px;
        color: ${PRIMARY};
    }
    p {
        font-size: 12px;
        font-weight: 500;
    }
`

export const InfosList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px;
    li {
        display: flex;
        font-size: 12px;
        background: ${SECONDARY}b0;
        padding: 5px;
        // margin: 5px;
        box-sizing: border-box;
        border-radius: 6px;
        align-items: center;
        img {
            width: 16px;
            margin-right: 4px;
        }
    }
`