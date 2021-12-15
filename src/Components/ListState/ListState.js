import React from "react";

import { ListStateStyled, Button } from "./ListStateStyled";

const ListState = ({ tasks, setTasks, status, setStatus }) => {
    const clearTasks = () => {
        setTasks([]);
    };
    const handleStatus = (e) => {
        setStatus(e.target.name);
    };

    return (
        <ListStateStyled>
            <p>Tasks: {tasks.length}</p>
            <Button name="all" onClick={handleStatus} active="true">
                All
            </Button>
            <Button name="uncompleted" onClick={handleStatus}>
                Active
            </Button>
            <Button name="completed" onClick={handleStatus}>
                Completed
            </Button>
            <Button onClick={clearTasks}>Clear</Button>
        </ListStateStyled>
    );
};

export default ListState;
