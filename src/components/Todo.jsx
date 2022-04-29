import { deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo({ id, title }) {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>
                {title}
                <span>
                    <button
                        onClick={() => {
                            dispatch(deleteTodo(id));
                        }}
                    >
                        Delete
                    </button>
                </span>
            </h2>
        </div>
    );
}
