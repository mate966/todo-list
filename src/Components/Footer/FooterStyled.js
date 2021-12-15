import styled, { keyframes } from "styled-components";

import { Breakpoints } from "../../Base/index";

import ReactLogoSrc from "../../Images/react-logo.png";
import StyledLogoSrc from "../../Images/styled-logo.png";

const {
    breakpoints: { sm },
} = Breakpoints;

const rotateLogo = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background-color: #736936;
    color: white;

    @media ${sm} {
        height: 80px;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.3rem;

    @media ${sm} {
        font-size: 1.8rem;
    }
`;

export const ReactLogo = styled.img`
    margin: 10px 20px 10px 10px;
    width: 30px;
    animation: ${rotateLogo} 7s linear infinite;
`;

export const Anchor = styled.a`
    display: grid;
    place-items: center;
    height: 100%;
`;

export const StyledComponentLogo = styled.img`
    margin: 10px;
    width: 30px;
`;

ReactLogo.defaultProps = {
    src: ReactLogoSrc,
    alt: "React logo",
};

StyledComponentLogo.defaultProps = {
    src: StyledLogoSrc,
    alt: "Styled logo",
};
