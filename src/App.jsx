import React from "react";
import Navbar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import usersLayout from "./components/usersLayout";

const App = () => {
    return <>
        <Navbar />
        <div className="container">
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/users/:userId?" component={usersLayout} />
            </Switch>
        </div>;
    </>;
};

export default App;
