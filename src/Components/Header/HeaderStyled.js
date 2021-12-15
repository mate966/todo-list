import styled from "styled-components";

import { Breakpoints } from "../../Base/index";

import calendarImage from "../../Images/calendar.jpg";
import calendarMobileImage from "../../Images/calendar-mobile.jpg";

const {
    breakpoints: { smPortrait, sm, md },
} = Breakpoints;

export const HeaderStyled = styled.header`
    min-height: 200px;
    position: relative;
    background-image: linear-gradient(
            0deg,
            rgba(34, 193, 195, 0.5) 0%,
            rgba(253, 187, 45, 0.5) 100%
        ),
        url(${calendarMobileImage});
    background-repeat: no-repeat;
    background-size: cover;

    @media ${md} {
        background-image: linear-gradient(
                0deg,
                rgba(34, 193, 195, 0.5) 0%,
                rgba(253, 187, 45, 0.5) 100%
            ),
            url(${calendarImage});
    }

    @media ${smPortrait} {
        min-height: 300px;
    }
`;

export const Title = styled.h1`
    position: absolute;
    top: 30%;
    left: 50%;
    font-size: 5rem;
    letter-spacing: 3px;
    color: white;
    transform: translate(-60%);

    @media ${smPortrait} {
        font-size: 6.5rem;
    }
`;

export const Socials = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
`;

export const SocialLinks = styled.a`
    font-size: 2rem;
    margin: 5px;
    color: white;

    @media ${sm} {
        font-size: 4rem;
    }
`;

export const SocialIcon = styled.i``;
