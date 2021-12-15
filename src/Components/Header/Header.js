import React from "react";

import {
    HeaderStyled,
    Title,
    Socials,
    SocialLinks,
    SocialIcon,
} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <Title>TODO</Title>
            <Socials>
                <SocialLinks href="https://github.com/mate966" target="blank">
                    <SocialIcon className="fab fa-github-square"></SocialIcon>
                </SocialLinks>
                <SocialLinks
                    href="https://linkedin.com/in/mateuszszweda"
                    target="blank"
                >
                    <SocialIcon className="fab fa-linkedin"></SocialIcon>
                </SocialLinks>
            </Socials>
        </HeaderStyled>
    );
};

export default Header;
