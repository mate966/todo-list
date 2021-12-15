import React from "react";
import Task from "../Task/Task";
import { TodoListStyled, AllTasksDone } from "./TodoListStyled";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = ({ tasks, setTasks, filterStatus }) => {
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
    };

    return (
        <>
            {tasks.length === 0 ? (
                <AllTasksDone>Great! You don't have any tasks</AllTasksDone>
            ) : (
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="tasks">
                        {(provided) => (
                            <TodoListStyled
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {filterStatus.map((task, index) => (
                                    <Draggable
                                        key={task.id}
                                        draggableId={task.name}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <Task
                                                provided={provided}
                                                innerRef={provided.innerRef}
                                                tasks={tasks}
                                                setTasks={setTasks}
                                                task={task}
                                                text={task.name}
                                                id={task.id}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </TodoListStyled>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </>
    );
};

export default TodoList;
