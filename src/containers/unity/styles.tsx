import styled from "styled-components"
import { GRAY_SCALE_0, PRIMARY, SECONDARY } from "../../components/general/colors"

export const UnityContainer = styled.div`
    padding-top: 150px;
`
export const SliderContainer = styled.div`
    width: 40%;
    --swiper-theme-color: ${PRIMARY};
    --swiper-navigation-size: 50px;
    img {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin: 0;
    }
`

export const InfosContainer = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin: 0;
    }
`

export const Infos = styled.div`
    padding: 25px;
    strong {
        font-weight: 900;
    }
    p {
        margin-top: 15px;
    }
    h2 {
        font-size: 24px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        small {
            font-size: 12px;
        }
    }
    p {
        width: 60%;
        @media (max-width: 768px) {
            width: 100%;
            max-width: 100%;
        }
    }
    .whatsLink {
        background: #1BD741;
        display: block;
        width: 60%;
        border-radius: 16px;
        padding: 15px;
        margin-top: 30px;
        color: ${GRAY_SCALE_0};
        text-decoration: none;
        font-size: 24px;
        text-align: center;
        img {
            width: 30px;
            margin-right: 15px;
            vertical-align: middle;
        }
        @media (max-width: 768px) {
            width: 100%;
            max-width: 100%;
        }
    }
`

export const InfosList = styled.ul`
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin: 0;
    }
    li {
        display: flex;
        font-size: 16px;
        padding: 5px;
        text-align: center;
        box-sizing: border-box;
        flex-direction: column;
        span {
            display: flex;
            justify-content: center;
            border-radius: 6px;
            align-items: center;
            background: ${SECONDARY}b0;
            padding: 10px;
            margin-top: 6px;
            font-size: 12px;
            img {
                width: 16px;
                margin-right: 4px;
            }
        }
    }
`