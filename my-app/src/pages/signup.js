import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from '../components/alert';
import UserService from '../scripts/services/userService';

function Signup() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [sexo, setSexo] = useState('');
    const [texto, setTexto] = useState('');
    const [textoSecundario, setTextoSecundario] = useState('');
    const [about, setAbout] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [background, setBackground] = useState('#ffffff');
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState({ text: '', type: '' });

    const authenticateUser = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const body = {
            login,
            senha,
            email,
            person: {
                nome,
                data,
                sexo,
                profile: {
                    texto,
                    textoSecundario,
                    about,
                    color,
                    background
                }
            }
        };

        UserService.createUser(body)
            .then(async response => {
                if (response.status === 201) {
                    setMsg({ text: 'Cadastro realizado com sucesso.', type: 'success' });
                    setTimeout(() => window.location.href = '/login', 1500);
                } else {
                    const asd = await response.json()
                    console.log(asd)
                    setMsg({ text: 'Erro ao realizar cadastro.', type: 'error' });
                    setTimeout(() => setMsg({ text: '', type: '' }), 1500);
                }

            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            })
            .finally(() => {
                setIsLoading(false);
            })

    };

    return (
        <div className="container justify-content-center mb-5 pb-5">
            <Alert message={msg.text} type={msg.type} />
            <div className="mt-3 d-flex justify-content-center">
                <div className="text-center">
                    <h2 className="mb-4">Formulário de Cadastro</h2>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-center">
                <form id="loginForm" onSubmit={authenticateUser}>
                    <div className="form-group m-1">
                        <label htmlFor="login" className="d-flex justify-content-start"><strong>Login:</strong></label>
                        <input placeholder="Insira seu Login" type="text" className="form-control" id="login" name="login" required value={login} onChange={(e) => setLogin(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="senha" className="d-flex justify-content-start"><strong>Senha:</strong></label>
                        <input placeholder="Insira sua Senha" type="password" className="form-control" id="senha" name="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="email" className="d-flex justify-content-start"><strong>E-mail:</strong></label>
                        <input placeholder="Insira seu email" type="email" className="form-control" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="nome" className="d-flex justify-content-start"><strong>Nome:</strong></label>
                        <input placeholder="Insira seu Nome" type="text" className="form-control" id="nome" name="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="data" className="d-flex justify-content-start"><strong>Data de Nascimento:</strong></label>
                        <input type="date" className="form-control" id="data" name="data" required value={data} onChange={(e) => setData(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="sexo" className="d-flex justify-content-start"><strong>Sexo:</strong></label>
                        <select className="form-control" id="sexo" name="sexo" required value={sexo} onChange={(e) => setSexo(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="texto" className="d-flex justify-content-start"><strong>Texto do Perfil:</strong></label>
                        <input placeholder="Insira o Texto do Perfil" type="text" className="form-control" id="texto" name="texto" required value={texto} onChange={(e) => setTexto(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="textoSecundario" className="d-flex justify-content-start"><strong>Texto Secundário do Perfil:</strong></label>
                        <input placeholder="Insira o Texto Secundário do Perfil" type="text" className="form-control" id="textoSecundario" name="textoSecundario" required value={textoSecundario} onChange={(e) => setTextoSecundario(e.target.value)} />
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="about" className="d-flex justify-content-start"><strong>Sobre:</strong></label>
                        <textarea placeholder="Insira informações sobre você" className="form-control" id="about" name="about" rows="3" required value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="color" className="d-flex justify-content-start"><strong>Cor do texto:</strong></label>
                            <input type="color" className="form-control" id="color" name="color" required value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="background" className="d-flex justify-content-start"><strong>Cor de Fundo:</strong></label>
                            <input type="color" className="form-control" id="background" name="background" required value={background} onChange={(e) => setBackground(e.target.value)} />
                        </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="text-center">
                            <button type="submit" className="btn btn-dark" disabled={isLoading}>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
