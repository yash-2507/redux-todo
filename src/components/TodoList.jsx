import { useSelector } from "react-redux";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

export default function TodoList() {
    const { todoArr } = useSelector((store) => store.todo);
    // console.log("todoArr: ", todoArr);
    return (
        <div>
            <h2>Todo List</h2>
            <TodoInput />
            {todoArr.map((todo) => {
                return <Todo key={todo.id} {...todo} />;
            })}
        </div>
    );
}
