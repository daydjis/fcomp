import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
reportWebVitals();
