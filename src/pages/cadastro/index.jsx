import React, { useState } from "react";
import jpIMG from '../../assets/jpIMG2.jpg'
import './styles.css'
import { Link } from "react-router-dom";

const Cadastro = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[name,setName] = useState("")

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
                            className={name !== "" ? 'has-val input' : 'input'}
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />
                        <span className="focus-input" data-placeholder="Name"></span>
                    </div>
                    
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
                        <button className="login-form-btn">Cadastrar</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Já possui uma conta ?</span>
                        <Link className="txt2" to="/tela_de_login_e_cadastro">Acesse com email e senha.</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Cadastro