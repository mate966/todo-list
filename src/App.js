import styled from "styled-components";

import React, { useState, useEffect } from "react";

import { GlobalStyle, Breakpoints } from "./Base/index";

import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import TodoList from "./Components/TodoList/TodoList";
import ListState from "./Components/ListState/ListState";

const {
    breakpoints: { xl },
} = Breakpoints;

const AppStyled = styled.div`
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    @media ${xl} {
        max-width: 700px;
        min-height: 40vh;
    }
`;

function App() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([
        {
            name: "Learn HTML",
            id: "1",
            isCompleted: false,
        },
        {
            name: "Learn CSS",
            id: "2",
            isCompleted: false,
        },
        {
            name: "Learn JS",
            id: "3",
            isCompleted: true,
        },
    ]);
    const [status, setStatus] = useState("all");
    const [filterStatus, setfilterStatus] = useState([]);

    useEffect(() => {
        const getStorage = () => {
            if (!localStorage.getItem("tasks")) {
                localStorage.setItem("tasks", JSON.stringify([]));
            } else {
                let tasksStorage = JSON.parse(localStorage.getItem("tasks"));
                setTasks(tasksStorage);
            }
        };

        getStorage();
    }, []);

    useEffect(() => {
        const saveStorage = () => {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        };

        const taskStatusHandler = () => {
            switch (status) {
                case "completed":
                    setfilterStatus(tasks.filter((task) => task.isCompleted));
                    break;
                case "uncompleted":
                    setfilterStatus(tasks.filter((task) => !task.isCompleted));
                    break;
                default:
                    setfilterStatus(tasks);
            }
        };

        taskStatusHandler();
        saveStorage();
    }, [tasks, status]);

    return (
        <>
            <GlobalStyle />
            <AppStyled>
                <Header />
                <Form
                    input={input}
                    setInput={setInput}
                    tasks={tasks}
                    setTasks={setTasks}
                />
                <TodoList
                    tasks={tasks}
                    setTasks={setTasks}
                    filterStatus={filterStatus}
                />
                <ListState
                    tasks={tasks}
                    setTasks={setTasks}
                    setStatus={setStatus}
                />
                <Footer />
            </AppStyled>
        </>
    );
}

export default App;
