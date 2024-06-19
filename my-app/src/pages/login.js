import React, { useState, useEffect } from 'react';
import 'bootstrap';

import { isLoggedIn } from '../scripts/auth';
import { getInforUser } from '../scripts/workspace';

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
        }, 1500);
    }

    const authenticateUser = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Ativa o indicador de carga

        try {
            const response = await fetch('http://localhost:8080/api/usuarios/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, senha }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('login', data.login);
                localStorage.setItem('token', data.token);
                await getInforUser();
                if (localStorage.getItem('token')) {
                    window.location.href = '/workspace';
                }
            } else if (response.status === 403) {
                alerta('Usuário ou senha inválido');
            } else {
                alerta('Erro ao autenticar usuário: ' + response.status);
            }
        } catch (error) {
            alerta('Servidor indisponivel.');
        } finally {
            setIsLoading(false); // Desativa o indicador de carga após a requisição
        }
    };

    useEffect(() => {
        isLoggedIn();
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
