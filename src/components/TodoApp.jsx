import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TodoApp() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const [taskText, setTaskText] = useState("");
    const [editTaskId, setEditTaskId] = useState(null);


    const addTask = () => {
        if (taskText.trim() === '') return;
        dispatch({ type: "ADD_TASK", payload: taskText });
        setTaskText("");
    }

    const editTask = (task) => {
        setTaskText(task.text);
        setEditTaskId(task.id);
    };

    const updateTask = () => {
        if (taskText.trim() === '') return;
        dispatch({ type: "EDIT_TASK", payload: { id: editTaskId, text: taskText } });
        setTaskText("");
        setEditTaskId(null);
    };

    const deleteTask = (id) => {
        dispatch({ type: "DELETE_TASK", payload: id });
    };




    return (
        <div>
            <h1>ToDo App</h1>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a task"
            />
            {editTaskId ? (
                <button onClick={updateTask}>Update Task</button>
            ) : (
                <button onClick={addTask}>Add Task</button>
            )}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => editTask(task)}>Edit</button>
                        <button onClick={() =>
                            deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}




