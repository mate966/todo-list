import React from "react";

import {
    ButtonFormStyled,
    ErrorMessage,
    FormStyled,
    InputStyled,
    SubmitIcon,
} from "./FormStyled";

const Form = ({ input, setInput, tasks, setTasks }) => {
    const handleInputTask = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
    };

    const handleSubmitTask = (e) => {
        e.preventDefault();

        input === ""
            ? alert("Inne")
            : setTasks([
                  ...tasks,
                  { name: input, id: Math.random() * 1000, isCompleted: false },
              ]);
        setInput("");
    };

    return (
        <FormStyled>
            <InputStyled type="text" onChange={handleInputTask} value={input} />
            <ButtonFormStyled type="submit" onClick={handleSubmitTask}>
                <SubmitIcon className="fas fa-arrow-circle-right"></SubmitIcon>
            </ButtonFormStyled>
        </FormStyled>
    );
};

export default Form;
