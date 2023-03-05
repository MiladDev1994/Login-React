import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-dark p-3 d-flex align-items-center justify-content-between position-fixed w-100 shadow-sm mt-0">
            <Link to={"/login"} className="btn btn-light">Login</Link>
            <Link to={"/register"} className="btn btn-light">Register</Link>
            <Link to={"/"} className="btn btn-light">Home</Link>
        </div>
    );
};

export default Navbar;