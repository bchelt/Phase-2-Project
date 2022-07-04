import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState('')
    let navigate = useNavigate();
    function handleChange(e) {
        setUser(e.target.value)
    }
    
    function login(e) {
        e.preventDefault();
        sessionStorage.setItem("user", user)
        navigate(-1);
    }
    
    return (
        <div className="container text-center" style={{position: 'relative'}}>

            <div className="justify-content-center align-items-center">
                
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="user" className="col-form-label">Username</label>
                        <input className='form-control' type="text" id='user' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-outline-secondary" onClick={login}>Login</button>    
                </form>   
            </div>
        </div>
    )
}

export default Login;