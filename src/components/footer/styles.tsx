import styled from "styled-components"
import { GRAY_SCALE_0, PRIMARY, SECONDARY } from "../general/colors"

export const FooterContainer = styled.footer`
  @import url(https://fonts.googleapis.com/css?family=Raleway);
  width: 100%;
  display: inline-block;
  height: 70px;
  margin-top: 70px;
  background-color: ${PRIMARY};
  .copyright {
    width: 50%;
    float: left;
    @media (max-width: 600px) {
        width: 100%;
    }
    p {
      padding-left: 10%;
      color: white;
      font-size: 0.7em;
      line-height: 70px;
      text-transform: capitalize;
      letter-spacing: 1px;
      @media (max-width: 600px) {
        text-align: center;
        padding: 0;
      }
    }
  }
  .social {
    width: 30%;
    float: right;
    @media (max-width: 600px) {
      width: 100%;
    }
    a {
      float: left;
      line-height: 70px;
      text-decoration: none;
      color: white;
      text-align: center;
      font-weight: bold;
      -moz-transition: all, 0.3s;
      -o-transition: all, 0.3s;
      -webkit-transition: all, 0.3s;
      transition: all, 0.3s;
      &:hover {
        background-color: #222;
        -moz-transition: all, 0.3s;
        -o-transition: all, 0.3s;
        -webkit-transition: all, 0.3s;
        transition: all, 0.3s;
      }
    }
  }
  
  .face {
    background-color: #3D5B94;
    font-size: 1.2em;
    width: 25%;
  }
  
  .insta {
    background-color: ${GRAY_SCALE_0};
    font-size: 1.2em;
    width: 25%;
    img {
      width: 30px;
      margin-top: 20px;
    }
  }
  
  .support {
    background-color: ${SECONDARY};
    font-size: 0.8em;
    width: 50%;
  }
`