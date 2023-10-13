import React, { useState } from "react";
import "./styles.css"
import jpIMG from '../../assets/jp.jpeg'
import { Link } from "react-router-dom";

const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <spam className="login-form-title">Bem vindo!</spam>
                        <spam className="login-form-title">
                            <img src={jpIMG} alt="shrek feliz" />
                        </spam>

                        <div className="wrap-input">
                            <input 
                                type="email" 
                                className={email !== "" ? 'has-val input' : 'input'}
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input 
                                type="password" 
                                className={password !== "" ? 'has-val input' : 'input'}
                                value={password}
                                onChange={e => setPassword(e.target.value)} 
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta?</span>
                            <Link to="/cadastro" className="txt2" >Criar conta.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login