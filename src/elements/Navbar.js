import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-dark p-3 d-flex align-items-center justify-content-between position-fixed w-100 shadow-sm">
            <Link to={"/register"} className="btn btn-light">Register</Link>
            <Link to={"/login"} className="btn btn-light">Login</Link>
            <Link to={"/"} className="btn btn-light">Home</Link>
        </div>
    );
};

export default Navbar;