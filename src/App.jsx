import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import Users from "./components/layouts/users";
import Navbar from "./components/ui/navBar";

const App = () => {
    return <>
        <Navbar />
        <Switch>
            <Route path="/login/:type?" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/users/:userId?/:edit?" component={Users} />
            <Redirect to="/" />
        </Switch>
    </>;
};

export default App;
