import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
