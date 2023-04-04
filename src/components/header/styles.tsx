import styled from "styled-components";
import { GRAY_SCALE_0, PRIMARY, PRIMARY_HOVER } from "../general/colors";

export const NavBarContainer = styled.nav`
  width: 100%;
  padding: 20px 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: ${PRIMARY}b0;
  position: fixed;
  z-index: 5;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 0;
    z-index: 999;
    background: ${PRIMARY};
  }
`;

export const MobileBar = styled.div`
display: none;
@media (max-width: 768px) {
    display: flex;
    color: ${GRAY_SCALE_0};
    padding: 20px 10px;
    justify-content: space-between;
    border: 1px solid ${GRAY_SCALE_0};
    margin-top: 15px;
    img {
        width: 24px;
    }
}

`

export const Logo = styled.div`
  img {
    height: 80px;
  }
`;

export const LiknsList = styled.ul`
  display: flex;
  margin-top: 35px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    text-align: center;
  }
  li {
      a {
          padding: 35px;
          color: ${GRAY_SCALE_0};
          text-decoration: none;
          @media (max-width: 768px) {
            width: 100%;
            padding: 20px;
            display: block;
            border-bottom: 1px solid ${GRAY_SCALE_0}b0;
          }
      &:hover {
        background: ${GRAY_SCALE_0}b0;
        color: ${PRIMARY_HOVER};
      }
    }
  }
`;
