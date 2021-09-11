import React from "react";

export const Menu = () => {
    return (
        <div className="menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ color: "white", float: "right" }}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-5">
                        SignUp
                    </li>
                    <li className="nav-item">
                        Signin
                    </li>
                </ul>
            </nav>
        </div>
    )
}