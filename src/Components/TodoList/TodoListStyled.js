import styled from "styled-components";

import { Breakpoints } from "../../Base/index";

const {
    breakpoints: { smPortrait },
} = Breakpoints;

export const TodoListStyled = styled.ul`
    flex-grow: 1;
`;

export const AllTasksDone = styled.h3`
    flex-grow: 1;
    margin: 20px auto;
    font-size: 1.8rem;
    color: #736936;

    @media ${smPortrait} {
        font-size: 2.6rem;
    }
`;
