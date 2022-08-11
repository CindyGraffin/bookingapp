import React, { useState } from "react";
import './login.css';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const {loading, error, dispatch} = useContext(AuthContext)
    const {user} = useContext(AuthContext)


    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})
        try {
            const response = await axios.post('http://localhost:8800/api/auth/login', credentials)
            dispatch({type: 'LOGIN_SUCCESS', payload: response.data})
            navigate('/', {replace: true})
        } catch (err) {
            dispatch({type:'LOGIN_FAILURE', payload: err.response.data})
        }
    }
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        navigate('/', {replace: true})
    }
	return (
        <>
        {!user && <div className="login">
            <div className="login__container">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="login-input"/>
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="login-input"/>
                <button className="login-button" onClick={handleClick} disabled={loading}>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>}
        {user && <div className="login">
            <div className="login__container">
                <button className="login-button" onClick={handleLogout}>Se déconnecter</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>}
        </>
    );
};

export default Login;
