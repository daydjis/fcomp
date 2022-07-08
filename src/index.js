import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Users from "./components/user";
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Users />
);

reportWebVitals();
