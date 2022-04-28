import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodo(result));
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            <TodoInput />
            <div>
                {todos &&
                    todos.map((elem, i) => {
                        return <Todo key={i} {...elem} />;
                    })}
            </div>
        </div>
    );
}
