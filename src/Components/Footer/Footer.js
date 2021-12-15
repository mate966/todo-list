import React from "react";

import {
    Anchor,
    FooterStyled,
    Paragraph,
    ReactLogo,
    StyledComponentLogo,
} from "./FooterStyled";

const Footer = () => {
    return (
        <FooterStyled>
            <Paragraph>Powered by</Paragraph>
            <Anchor href="https://reactjs.org/">
                <ReactLogo />
            </Anchor>
            <Paragraph>Designed with</Paragraph>
            <Anchor href="https://reactjs.org/">
                <StyledComponentLogo />
            </Anchor>
        </FooterStyled>
    );
};

export default Footer;
