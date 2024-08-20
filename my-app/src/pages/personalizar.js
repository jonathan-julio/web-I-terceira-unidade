import React, { useEffect, useState } from 'react';
import Alert from '../components/alert';
import PersonalizarForm from '../components/personalizarForm';
import UserService from '../scripts/services/userService';
import ProfileService from '../scripts/services/profileService';
import { isConnected } from '../scripts/utils';

function Personalizar() {
    const [id, setID] = useState('');
    const [textoPerfil, setTextoPerfil] = useState('');
    const [textoSecundario, setTextoSecundario] = useState('');
    const [about, setAbout] = useState('');
    const [corTexto, setCorTexto] = useState('');
    const [background, setBackground] = useState('');
    const [usarHtmlProprio, setUsarHtmlProprio] = useState(false); // Novo estado para o checkbox
    const [html, setHtml] = useState('');
    const [msg, setMsg] = useState({ text: '', type: '' });

    useEffect(() => {
        UserService.fetchUserByLogin(localStorage.login)
            .then(response => {
                setID(response.person.profile.id);
                setTextoPerfil(response.person.profile.texto);
                setTextoSecundario(response.person.profile.textoSecundario);
                setAbout(response.person.profile.about);
                setCorTexto(response.person.profile.color);
                setBackground(response.person.profile.background);
                setUsarHtmlProprio(response.person.profile.isHtml === "true" ? true : false);
                setHtml(response.person.profile.html);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            });
    }, []);

    useEffect(() => {
        isConnected();
    }, []);

    const saveProfile = async (e) => {
        e.preventDefault();
        const body = {
            id: id,
            texto: textoPerfil,
            textoSecundario: textoSecundario,
            about: about,
            color: corTexto,
            background: background,
            isHtml: usarHtmlProprio ? 'true' : 'false',
            html: usarHtmlProprio ? html : null // Inclua HTML somente se `usarHtmlProprio` for true
        };
        ProfileService.putProfile(body)
            .then(() => {
                setMsg({ text: 'Perfil atualizado com sucesso.', type: 'success' });
                setTimeout(() => window.location.href = '/workspace', 1500);
            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            });
    };

    const toggleAtivo = async () => {
        setUsarHtmlProprio(!usarHtmlProprio);
        ProfileService.patchIsHtml(!usarHtmlProprio);
    };

    return (
        <div className='bodyPage'>
            <Alert message={msg.text} type={msg.type} />
            <aside className="gallery-overview">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-lg-10 py-2 d-flex justify-content-center">
                            <div className="card-0">
                                <h3>Personalizar</h3>
                                <p>
                                    Personalize seus dados do portfolio, Texto do perfil, texto secundario, sobre e as cores de texto e background. Apos concluir, clique em salvar no final da pagina para gravar as alterações.
                                </p>
                            </div>
                        </div>
                        <div className="liga-desliga d-flex">
                            <p className='mx-4'>Usar meu próprio HTML </p>
                            <input
                                type="checkbox"
                                className="liga-desliga__checkbox"
                                id="liga-desliga"
                                checked={usarHtmlProprio}
                                onChange={() => toggleAtivo()}
                            />
                            <label htmlFor="liga-desliga" className="liga-desliga__botao"></label>
                        </div>
                        <div className="col-lg-5 mt-1">
                            {usarHtmlProprio ? (
                                <div className="textarea-container" style={{ position: 'relative' }}>
                                    <textarea
                                        value={html}
                                        onChange={(e) => setHtml(e.target.value)}
                                        rows="22"
                                        className="form-control"
                                        placeholder="Insira seu HTML aqui"
                                        style={{ background: 'black', color: 'white', width: '100%' }}
                                    />
                                    <button
                                        onClick={saveProfile} // Passar o evento corretamente
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            right: '45%',
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '5%',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'
                                        }}
                                    >
                                        Salvar
                                    </button>
                                </div>
                            ) : (
                                <PersonalizarForm
                                    texto={textoPerfil}
                                    setTextoPerfil={setTextoPerfil}
                                    textoSecundario={textoSecundario}
                                    setTextoSecundario={setTextoSecundario}
                                    about={about}
                                    setAbout={setAbout}
                                    color={corTexto}
                                    setCorTexto={setCorTexto}
                                    background={background}
                                    setBackground={setBackground}
                                    saveProfile={saveProfile}
                                />
                            )}
                        </div>
                        <div className="row col-lg-7 d-flex justify-content-center">
                            <div>
                                <h3 className='d-flex justify-content-center'>Pré-visualização</h3>
                                <div id="posts-container" className="scaled-portfolio">
                                    <div style={{ width: '100%', height: '98%' }}>
                                        <iframe
                                            id='myiframe'
                                            title={localStorage.login}
                                            srcDoc={usarHtmlProprio ? html : null} // Exibe o HTML inserido no textarea
                                            src={usarHtmlProprio ? undefined : `/portfolio/${localStorage.login}`} // Carrega o portfólio se não estiver usando HTML próprio
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Personalizar;
