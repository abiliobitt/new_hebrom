import styled from "styled-components"
import home_banner from '../../assets/home_banner.jpg'
import { GRAY_SCALE_0, PRIMARY, SECONDARY } from "../general/colors"

export const HomeBannerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url(${home_banner});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 200px;
    &:before {
        content: ' ';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.2);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
`

export const SearchBox = styled.div`
    width: 90%;
    z-index: 5;
    margin: 0 auto;
    position: relative;
    h1 {
        font-size: 2.5em;
        font-weight: bold;
        background: ${SECONDARY}b0;
        color: ${GRAY_SCALE_0};
        padding: 15px;
        max-width: 550px;
    }
    p {
        font-size: 1.5em;
        color: ${GRAY_SCALE_0};
        background: ${PRIMARY}b0;
        padding: 15px;
        max-width: 600px;
        margin-top: 15px;
    }
`

export const SearchBar = styled.div`
  width: 100%;
  background: white;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1;
`

export const CustomSelect = styled.select`
  border: none;
  padding: 25px;
  box-sizing: border-box;
  outline: none;
  max-width: 150px;
`
export const SearchInput = styled.input`
  border: none;
  padding: 25px;
  box-sizing: border-box;
  max-width: 100%;
  outline: none;
`

export const CustomLinksWrapper = styled.div`
  width: 50%;
  margin: 40px auto 0 auto;
  display:flex;
  justify-content: space-between;
`

export const CustomLink = styled.a`
  background-color: rgba(92,1,1,0.5);
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  margin: 0.5rem;
  color: #FFFFFF;
`
export const CustomButton = styled.button`
  background: rgba(92,1,1,0.5);
  padding: 20px;
  border: none;
  color: #FFFFFF;
`
