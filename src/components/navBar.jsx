import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (<ul className="navbar_list">
        <li className="navbar_item">
            <Link className="navbar_text" to="/main">Main</Link>
        </li>
        <li className="navbar_item">
            <Link className="navbar_text" to="/login">Login</Link>
        </li>
        <li className="navbar_item">
            <Link className="navbar_text" to="/users">Users</Link>
        </li>
    </ul>);
};

export default Navbar;
