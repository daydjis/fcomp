import React from "react";

import { Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import Navbar from "./components/ui/navBar";
import usersLayout from "./components/usersLayout";

const App = () => {
    return <>
        <Navbar />
        <Switch>
            <Route path="/login/:type?" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/users/:userId?" component={usersLayout} />
        </Switch>
    </>;
};

export default App;
