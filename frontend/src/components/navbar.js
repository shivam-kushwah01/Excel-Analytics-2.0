import React from "react";
import '../styles/navbar.css'

const navbar = () => {
    return (
        <nav>
            <span>ExcelAnalytics</span>
            <div className="login">
                <a>Signup</a>
                <a>Login</a>
            </div>
        </nav>
    );
};

export default navbar;