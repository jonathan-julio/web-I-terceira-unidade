import React, { useState, useEffect } from 'react';
import 'bootstrap';

import UserService from '../scripts/services/userService';
import { isConnected } from '../scripts/utils';

function Login() {
    const [alert, setVisibleAlert] = useState('');
    const [status, setStatus] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar a carga do botão

    function alerta(msg) {
        setStatus(msg);
        setVisibleAlert('visible');
        setTimeout(function () {
            setVisibleAlert('none');
        }, 2500);
    }

    function asyncfetchUser() {
        UserService.fetchUserByLogin(login)
            .then(async response => {
                localStorage.setItem('role', response.role);
                localStorage.setItem('id', response.id);
            })
    }




    const authenticateUser = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Ativa o indicador de carga
        asyncfetchUser();
        const body = {
            login: login,
            senha: senha
        }
        UserService.login(body)
            .then(async response => {
                if ((response.errors && response.errors.length > 0) || response.status === 403) {
                    alerta('Usuário ou senha inválidos');
                } else if (response.status === 500) {
                    alerta('Erro interno do servidor');
                } else {
                    localStorage.setItem('login', response.login);
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('role', response.role);
                }
            })
            .catch(error => {
                alerta('Erro ao autenticar usuário: ' + error);
            })
            .finally(() => {
                setIsLoading(false);
                if (localStorage.getItem('token')) {
                    window.location.href = '/workspace';
                }
            })


    };

    useEffect(() => {
        isConnected ();
    }, []);

    return (
        <div>
            <div className={`d-flex justify-content-end mx-5 ${alert === 'visible' ? '' : 'd-none'}`}>
                <div className="alert alert-danger m-4 p-2 d-block position-absolute" id="danger" role="alert">
                    {status}
                </div>
            </div>
            <div id="loginDiv" className="container mb-5 d-flex justify-content-center">
                <form id="loginForm" onSubmit={authenticateUser}>
                    <h5 className='d-flex m-4 justify-content-center custom-link text-decoration-none'><strong>BEM VINDO</strong></h5>
                    <div className="form-group p-2">
                        <label className=' d-flex justify-content-start'><strong>Login:</strong></label>
                        <input
                            placeholder='Insira seu login'
                            id="login"
                            type="text"
                            className="form-control"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group p-2">
                        <label className=' d-flex justify-content-start'><strong>Senha:</strong></label>
                        <input
                            placeholder='Insira sua senha'
                            id="senha"
                            type="password"
                            className="form-control"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <a className='small d-flex m-2 justify-content-end custom-link text-decoration-none' href="/reset-password">Esqueceu sua senha?</a>
                    {isLoading ? (
                        <button type="button" className="btn btn-dark container mt-3 d-flex justify-content-center text-center" disabled>
                            <div className="spinner-border spinner-border-sm m-1 d-flex justify-content-center text-center" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-dark container mt-3 d-flex justify-content-center">Entrar</button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Login;
