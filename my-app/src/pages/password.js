import 'bootstrap';
import React, { useState } from 'react';
import Alert from '../components/alert';
import PasswordService from '../scripts/services/passwordService';

function Password() {

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState({ text: '', type: '' });

    const request = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Ativa o indicador de carga
        const body = {
            emailTo: email,
        };
        PasswordService.resetPassword(body)
            .then(() => {
                setMsg({ text: 'E-mail de recumperação enviado com sucesso.', type: 'success' });
                setTimeout(() => window.location.href = '/', 1500);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            })
            .finally(() => { 
                setIsLoading(false) 
            });
    };

    return (
        <div className='bodyPage m-5'>
            <Alert message={msg.text} type={msg.type} />
            <div id="loginDiv" className="container d-flex pt-5 mt-5 " >

                <form id="loginForm" onSubmit={request}>
                    <h5 className='d-flex m-4 justify-content-center custom-link text-decoration-none'>Recuperação de senha</h5>
                    <div className="form-group p-2">
                        <input placeholder='E-mail do usuario' onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" required />
                    </div>
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

export default Password;
