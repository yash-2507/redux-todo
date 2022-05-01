import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function TodoInput() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                placeholder="Enter ToDo"
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    // console.log(input);
                    let toPush = { title: input };
                    // console.log("toPush: ", toPush);
                    dispatch(addTodo(toPush));
                }}
            >
                Add ToDo
            </button>
        </div>
    );
}
