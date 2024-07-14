import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from '../components/alert';
import UserCheckboxList from '../components/userCheckboxList';
import PostForm from '../components/postForm';
import UserService from '../scripts/services/userService';
import PostService from '../scripts/services/postService';
import { isConnected } from '../scripts/utils';


function Editar() {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');
    const [github, setGithub] = useState('');
    const [msg, setMsg] = useState({ text: '', type: '' });

    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    useEffect(() => {
        isConnected();
    }, []);
    
    useEffect(() => {
        UserService.fetchUsers()
            .then(response => {
                setUsers(response);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            }
            );
    }, []);

    useEffect(() => {
        PostService.fetchPost(localStorage.editPost)
            .then(response => {
                setDescricao(response.descricao);
                setGithub(response.github);
                setTitle(response.titulo);
                setFilePreview(response.img);
                setSelectedUsers(response.profile_ids);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            }
            );
    }, []);

    const handleCheckboxChange = (userId) => {
        setSelectedUsers((prevSelected) =>
            prevSelected.includes(userId)
                ? prevSelected.filter((id) => id !== userId)
                : [...prevSelected, userId]
        );
    };

    const checkVariables = () => {
        if (!title || !descricao || !github) {
            setMsg({ text: 'Por favor, preencha todos os campos obrigatórios.', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            return false;
        }
        return true;
    };

    const handleSave = async () => {
        if (!checkVariables()) return;
        const formData = new FormData();
        formData.append('id', localStorage.editPost);
        formData.append('Titulo', title);
        formData.append('descricao', descricao);
        formData.append('github', github);
        formData.append('profile_ids', selectedUsers);
        formData.append('status', 'PUBLICADO');
        if (file) {
            formData.append('file', file);
        }
        PostService.updatePost(formData)
            .then(() => {
                setMsg({ text: 'Publicação editada com sucesso.', type: 'success' });
                setTimeout(() => window.location.href = '/workspace', 1500);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            }
            );
    };

    const handleDelete = async () => {
        if (window.confirm("Deseja deletar essa publicação?")) {
            PostService.deletePost(localStorage.editPost)
                .then(() => {
                    setMsg({ text: 'Publicação deletada com sucesso.', type: 'success' });
                    setTimeout(() => window.location.href = '/workspace', 1500);
                })
                .catch(error => {
                    setMsg({ text: error.message, type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                }
                );
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile);
            setFile(selectedFile);
            setFilePreview(fileURL);
        } else {
            setFilePreview(null);
        }
    };

    return (
        <div className="bodyPage mx-5 m-sm-5 m-lg-5">
            <Alert message={msg.text} type={msg.type} />
            <div className="row d-flex justify-content-center">
                <div className="col-sm-9  col-md-10 col-lg-3 d-flex flex-wrap justify-content-start my-3 m-sm-5 ">
                    <div className="card-0">
                        <h3>Novo Projeto</h3>
                        <p>Edite sua equipe, descrição e link do repositório do seu projeto. Após concluir, clique em salvar no final da página para gravar as alterações.</p>
                        <h3 className="pt-5 d-flex justify-content-start">Equipe</h3>
                        <UserCheckboxList users={users} selectedUsers={selectedUsers} handleCheckboxChange={handleCheckboxChange} />
                    </div>
                </div>
                <div className="col-sm-9 col-md-10 col-lg-6 d-flex flex-wrap justify-content-start m-sm-5">
                    <PostForm
                        title={title}
                        setTitle={setTitle}
                        descricao={descricao}
                        setDescricao={setDescricao}
                        github={github}
                        setGithub={setGithub}
                        file={file}
                        setFile={setFile}
                        filePreview={filePreview}
                        handleFileChange={handleFileChange}
                        handleSave={handleSave}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}

export default Editar;
