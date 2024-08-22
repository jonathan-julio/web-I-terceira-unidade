import React, { useEffect, useState } from 'react';
import FormColumn from '../components/formColumn';
import PermissionForm from '../components/permissionForm';
import AccessForm from '../components/accessForm';
import PasswordForm from '../components/passwordFormAdmin';
import Alert from '../components/alert';
import { formatarData, isConnected } from '../scripts/utils';
import UserService from '../scripts/services/userService';
import AdminService from '../scripts/services/adminService'
import PostService from '../scripts/services/postService';

function AdminPage() {
    const [users, setUsers] = useState([]);
    const [userLog, setUserLog] = useState(null);

    const [userPermissao, setUserPermissao] = useState(null);
    const [permissao, setPermissao] = useState(null);

    const [userAcesso, setUserAcesso] = useState(null);
    const [acesso, setAcesso] = useState(null);

    const [userSenha, setUserSenha] = useState(null);
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const [logs, setLogs] = useState('');
    const [msg, setMsg] = useState({ text: '', type: '' });
    const [bloqueados, setBloqueados] = useState('');

    useEffect(() => {
        isConnected();
    }, []);

    useEffect(() => {
        UserService.fetchUsers()
            .then(response => setUsers(response))
            .catch(error => console.error(error));
    }, []);

    const getLogs = async (e) => {
        e.preventDefault();

        if (userLog) {
            AdminService.fetchLogs(userLog)
                .then(response => {
                    const logTexts = response.map(log => {
                        return `Changer ${log.id}: ${log.changer}, \nData: ${formatarData(log.data)}\nFunction: ${log.function}\n\n`;
                    });
                    const logsString = logTexts.join('');
                    setLogs(logsString);
                })
                .catch(error => {
                    setMsg({ text: error.message, type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                });
        } else {
            setMsg({ text: 'Nenhum usuario selecionado', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
        }
    };


    const getBloqueados = async (e) => {
        e.preventDefault();
        AdminService.fetchBlocked()
            .then(response => {
                const logTexts = response.map(blocked => {
                    return `ID usuario : ${blocked.id}\nLogin : ${blocked.login} \nNome: ${blocked.person.nome}\n\n`;
                });
                const logsString = logTexts.join('');
                setBloqueados(logsString);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            });
    };

    const setRole = async (e) => {
        e.preventDefault();
        const body = {
            usuarioID: userPermissao,
            tipo: permissao
        }
        if (userPermissao && permissao) {
            AdminService.postPermissao(body)
                .then(() => {
                    setMsg({ text: 'Permissão alterada com sucesso.', type: 'success' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                })
                .catch(error => {
                    setMsg({ text: error.message, type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                });
        } else {
            setMsg({ text: 'Nenhum usuario e/ou permissão selecionado', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
        }
    };

    const setAcessoFunction = async (e) => {
        e.preventDefault();
        const body = {
            usuarioID: userAcesso,
            acesso: acesso
        }
        if (userAcesso && acesso) {
            AdminService.postAcesso(body)
                .then(() => {
                    setMsg({ text: 'Permissão alterada com sucesso.', type: 'success' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                })
                .catch(error => {
                    setMsg({ text: error.message, type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                });
        } else {
            setMsg({ text: 'Nenhum usuario e/ou acesso selecionado', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
        }
    };

    const checkVariables = () => {
        if (password !== checkPassword) {
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
                usuarioID: userSenha,
                password: password,
            };
            AdminService.patchPasswordAdmin(body)
                .then(() => {
                    setMsg({ text: 'Senha alterada com sucesso.', type: 'success' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 2500);
                })
                .catch(error => {
                    setMsg({ text: error.message, type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                });
        }
    };


    return (
        <div className='bodyPage mx-3'>
            <Alert className="d-flex justify-content-end" message={msg.text} type={msg.type} />
            <section className="gallery-overview">
                <div className="container pt-4">
                    <div className="col d-flex justify-content-center">
                        <h2 className="mb-1">Administrador</h2>
                    </div>
                    <div className="row">
                        <FormColumn title="Buscar log" users={users} value={logs} setUser={setUserLog} fetch={getLogs} />
                        <FormColumn title="Buscar bloqueados" users={users} value={bloqueados} fetch={getBloqueados} />
                        {localStorage.role === "ADMIN" ? (<PermissionForm users={users} setUser={setUserPermissao} setPermissao={setPermissao} post={setRole} />) : (null)}
                        {localStorage.role === "ADMIN" ? (<AccessForm users={users} setUser={setUserAcesso} setAcesso={setAcesso} post={setAcessoFunction} />) : (null)}
                        {localStorage.role === "ADMIN" ? (<PasswordForm users={users} setUser={setUserSenha} password={password} setPasswrd={setPassword} checkPassword={checkPassword} setCheckPassword={setCheckPassword} submit={handleSave} />) : (null)}
                    </div>
                </div>
            </section>
        </div>
    );
}



export default AdminPage;
