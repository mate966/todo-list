import styled from "styled-components";

import { Breakpoints } from "../../Base/index";

const {
    breakpoints: { smPortrait },
} = Breakpoints;

export const FormStyled = styled.form`
    position: absolute;
    top: 135px;
    left: 50%;
    display: flex;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: 7px;
    background-color: white;
    transform: translate(-50%, 0);

    &::after {
        display: none;
        position: absolute;
        top: 37px;
        left: 0;
        content: ${(props) => (!!props.after ? props.after : "asdASD")};
        font-size: 1.5rem;
        color: red;
    }

    @media ${smPortrait} {
        top: 185px;
    }
`;

export const InputStyled = styled.input`
    height: 3.5rem;
    border: none;
    font-size: 1.3rem;
    color: grey;

    &:focus {
        outline: none;
    }

    @media ${smPortrait} {
        font-size: 2rem;
    }
`;

export const ButtonFormStyled = styled.button`
    margin-left: 10px;
    border: none;
    font-size: 2rem;
    background-color: transparent;
    color: rgba(34, 193, 195, 0.5);
`;

export const Paragraph = styled.p`
    margin: 10px;
    text-align: center;
    font-size: 1.2rem;
    color: #333;
`;

export const TasksSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const SubmitIcon = styled.i``;

export const ErrorMessage = styled.p`
    position: absolute;
    top: 37px;
    left: 0;
    font-size: 1.5rem;
    color: red;
`;
