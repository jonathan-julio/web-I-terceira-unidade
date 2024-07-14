import 'bootstrap';
import React, { useState } from 'react';
import Alert from '../components/alert';
import { useParams } from 'react-router-dom';
import UserService from '../scripts/services/userService';

function ResetPassword() {

    const [password, setPassword] = useState('');
    const [checkpassword, setCheckPassword] = useState('');
    const { token } = useParams();
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar a carga do botão


    const [msg, setMsg] = useState({ text: '', type: '' });


    const checkVariables = () => {
        if (password !== checkpassword) {
            setMsg({ text: 'Confirmação da senha invalida. verique novamente a nova senha.', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 2500);
            return false;
        }
        return true;
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!checkVariables()) {
            return;
        }
        else {
            const body = {
                password: password,
            };
            UserService.recoverPassword(body, token)
                .then(() => {
                    setMsg({ text: 'Senha alterada com sucesso.', type: 'success' });
                    setTimeout(() => window.location.href = '/workspace', 1500);
                })
                .catch(error => {
                    setMsg({ text: error.message, type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    };

    return (
        <div className='bodyPage m-5'>
            <Alert message={msg.text} type={msg.type} />
            <div id="loginDiv" className="bodyPage d-flex pt-5 mt-5" >

                <form onSubmit={handleSave} >
                    <fieldset className="scheduler-border">
                        <legend className="scheduler-border  text-start">Alterar sua senha</legend>
                        <div className="form-group text-start">
                            <label htmlFor="password">Nova Senha</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="password" name="password" required />

                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="checkpassword">Confirme a nova senha</label>
                            <input type="password" onChange={(e) => setCheckPassword(e.target.value)} value={checkpassword} className="form-control" id="checkpassword" name="checkpassword" required />
                        </div>
                        <div className="text-center text-start m-1 ">
                            {isLoading ? (
                                <button type="button" className="btn btn-dark container mt-3 d-flex justify-content-center text-center" disabled>
                                    <div className="spinner-border spinner-border-sm m-1 d-flex justify-content-center text-center" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-dark container mt-3 d-flex justify-content-center">Enviar</button>
                            )}
                        </div>
                    </fieldset>
                </form>

            </div>
        </div>

    );
}

export default ResetPassword;
