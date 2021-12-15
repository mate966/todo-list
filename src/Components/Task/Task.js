import React, { useState } from "react";

import {
    Checkboxstyled,
    LabelStyled,
    TaskBtnStyled,
    TaskStyled,
    Icon,
    EditInput,
    EditForm,
} from "./TaskStyled";

const Task = ({ tasks, task, setTasks, text, provided, innerRef, id }) => {
    const [taskEditing, setTaskEditing] = useState(null);
    const [textEditing, setTextEditing] = useState("");

    const deleteTask = () => {
        setTasks(tasks.filter((elem) => elem.id !== task.id));
    };

    const editTask = (id) => {
        const updateTasks = [...tasks].map((task) => {
            if (task.id === id) {
                task.name = textEditing;
            }
            return task;
        });
        setTasks(updateTasks);
        setTaskEditing(null);
        setTextEditing("");
    };

    const handleComplete = () => {
        setTasks(
            tasks.map((elem) => {
                if (elem.id === task.id) {
                    return { ...elem, isCompleted: !elem.isCompleted };
                }
                return elem;
            })
        );
    };

    return (
        <>
            <TaskStyled
                ref={innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <Checkboxstyled
                    name={text}
                    onChange={handleComplete}
                    type="checkbox"
                    checked={task.isCompleted}
                />
                <LabelStyled
                    htmlFor="task"
                    className={task.isCompleted ? "completed" : null}
                >
                    {!taskEditing ? text : null}
                    {taskEditing === id ? (
                        <EditForm>
                            <EditInput
                                type="text"
                                onChange={(e) => setTextEditing(e.target.value)}
                                value={textEditing}
                            />
                            <TaskBtnStyled
                                type="submit"
                                onClick={() => editTask(id)}
                            >
                                <Icon
                                    style={{ color: "#736936" }}
                                    className="far fa-check-square"
                                ></Icon>
                            </TaskBtnStyled>
                        </EditForm>
                    ) : null}
                </LabelStyled>
                <TaskBtnStyled onClick={deleteTask}>
                    <Icon className="far fa-trash-alt"></Icon>
                </TaskBtnStyled>
                <TaskBtnStyled onClick={() => setTaskEditing(id)}>
                    <Icon className="far fa-edit"></Icon>
                </TaskBtnStyled>
            </TaskStyled>
        </>
    );
};

export default Task;
