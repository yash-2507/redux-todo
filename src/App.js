import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import { getItems } from "./features/todo/todoSlice";

function App() {
    const { isLoading } = useSelector((store) => store.todo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems());
    }, []);

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;
