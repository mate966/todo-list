import styled from "styled-components";

import { Breakpoints } from "../../Base/index";

const {
    breakpoints: { smPortrait },
} = Breakpoints;

export const TaskStyled = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 100%;
    min-height: 60px;
    border-bottom: 1px solid #ccc;
    word-break: break-word;
    background-color: white;
    font-size: 1.5rem;
    color: #333;
    list-style: none;

    @media ${smPortrait} {
        padding: 20px;
        min-height: 80px;
        font-size: 2rem;
    }
`;

export const Checkboxstyled = styled.input`
    min-width: 25px;
    min-height: 25px;
    border-radius: 5px;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &:checked {
        background-image: linear-gradient(
            0deg,
            rgba(34, 193, 195, 0.5) 0%,
            rgba(253, 187, 45, 0.5) 100%
        );
    }
`;

export const LabelStyled = styled.label`
    flex-grow: 1;
    margin-left: 10px;
    &.completed {
        text-decoration: line-through;
        opacity: 0.5;
    }
`;

export const TaskBtnStyled = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.5rem;

    @media ${smPortrait} {
        font-size: 2rem;
    }
`;

export const Icon = styled.i`
    margin: 0 10px;
    color: #333;
    cursor: pointer;
`;

export const EditForm = styled.form`
    display: flex;
    align-items: center;
`;

export const EditInput = styled.input`
    margin: 0 10px;
    width: 150px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 7px;
    padding: 0 10px;
    background-color: white;

    &:focus {
        outline: none;
    }
`;
