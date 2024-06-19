import React, { useEffect, useState } from 'react';
import PasswordForm from '../components/passwordForm';
import PersonalInfoForm from '../components/personInfoForm';
import Alert from '../components/alert';
import { isAuthenticated } from '../scripts/auth';

import { patchPassword, patchPerson, fetchPerson } from '../services/apiService';

function GalleryOverview() {

    const [lastPassword, setLastPassword] = useState('');
    const [password, setPassword] = useState('');
    const [checkpassword, setCheckPassword] = useState('');

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [sexo, setSexo] = useState('');

    const [msg, setMsg] = useState({ text: '', type: '' });

    useEffect(() => {
        const getInforPerson = async () => {
            try {
                const response = await fetchPerson();
                setNome(response.nome);
                setData(response.data);
                setSexo(response.sexo);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        getInforPerson();
    }, []);


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
                lastPassword: lastPassword,
                password: password,
            };

            try {
                await patchPassword(body);
                setMsg({ text: 'Senha alterada com sucesso.', type: 'success' });
                setTimeout(() => window.location.href = '/workspace', 1500);
            } catch (error) {
                setMsg({ text: 'Erro ao alterar senha.', type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
    };

    const handleSavePerson = async (e) => {
        e.preventDefault();
        const body = {
            nome: nome,
            sexo:sexo,
        };

        try {
            await patchPerson(body);
            setMsg({ text: 'Perfil atualizado com sucesso.', type: 'success' });
            setTimeout(() => window.location.href = '/workspace', 1500);
        } catch (error) {
            setMsg({ text: 'Erro ao alterar perfil.', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    useEffect(() => {
        isAuthenticated();
    }, []);

    return (
        <div className='bodyPage mx-5 '>
            <Alert message={msg.text} type={msg.type} />
            <aside className="gallery-overview">
                <div className="container mt-3 d-flex justify-content-center">
                    <div className="text-center">
                        <h2 className="mb-1">Configurações</h2>
                    </div>
                </div>
                <div className="container pt-2 pb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-lg-10 py-5 d-flex justify-content-center">
                            <div className="card-0">
                                <h3>Dados pessoais</h3>
                                <p>
                                    Personalize seus dados pessoais, Senha, nome, sex, etc... Após concluir, clique em salvar para
                                    gravar as alterações.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            < PasswordForm
                                patchPassword={handleSave}
                                LastPassword={lastPassword}
                                setLastPassword={setLastPassword}
                                password={password}
                                setPassword={setPassword}
                                checkpassword={checkpassword}
                                setCheckPassword={setCheckPassword} />
                        </div>
                        <div className="col-lg-4">
                            <PersonalInfoForm
                                nome={nome}
                                setNome={setNome}
                                data={data}
                                sexo={sexo}
                                setSexo={setSexo}
                                handleSavePerson={handleSavePerson}
                            />
                        </div>
                        {/* 
                        <div className="col-lg-8 ">
                            <Personalizar

                            />
                        </div> */}
                    </div>
                </div>


            </aside>

        </div>

    );
}

export default GalleryOverview;
