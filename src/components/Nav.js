import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
    let navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user'))
    function logout() {
        sessionStorage.removeItem("user")
        setIsLoggedIn(!isLoggedIn)
        //navigate('/')
    }

    function login() {
        navigate("/login")
    }
    
    return (
        <nav className="navbar" style={{backgroundColor: "darkred"}}>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                <div>
                    Home
                </div>
            </Link>
            {sessionStorage.getItem('user')
            ? <button className={'btn btn-secondary'} type="button" onClick={logout}>Logout</button>
            : <button className={'btn btn-warning'} type="button" onClick={login}>Login</button>}
        </nav>
    )
}

export default Nav;