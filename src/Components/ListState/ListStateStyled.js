import styled from "styled-components";

import { Breakpoints } from "../../Base/index";

const {
    breakpoints: { smPortrait },
} = Breakpoints;

export const ListStateStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 50px;
    font-size: 1.5rem;

    @media ${smPortrait} {
        font-size: 2rem;
    }
`;

export const Button = styled.button`
    padding: 5px;

    @media ${smPortrait} {
        padding: 8px 15px;
    }
`;
