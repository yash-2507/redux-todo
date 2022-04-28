import React from "react";

export default function Todo({ id, title }) {
    const handleDelete = async () => {
        let res = await fetch(`http://localhost:8080/todo/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
    };
    return (
        <div
            style={{
                display: "flex",
                width: "100vw",
                alignItems: "center",
                justifyContent: "center",
                gap: 25,
            }}
        >
            <h2>{title}</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
