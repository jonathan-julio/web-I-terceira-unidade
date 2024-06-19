import React, { useEffect, useState } from 'react';
import Alert from '../components/alert';
import { isAuthenticated } from '../scripts/auth';
import { fetchUserByLogin, putProfile } from '../services/apiService';
import PersonalizarForm from '../components/personalizarForm';
import Portfolio from './portfolio';

function Personalizar() {
    const [id, setID] = useState('');
    const [textoPerfil, setTextoPerfil] = useState('');
    const [textoSecundario, setTextoSecundario] = useState('');
    const [about, setAbout] = useState('');
    const [corTexto, setCorTexto] = useState('');
    const [background, setBackground] = useState('');

    const [posts, setPosts] = useState([]);


    const [msg, setMsg] = useState({ text: '', type: '' });
    //const [iframeUrl, setIframeUrl] = useState('');

    useEffect(() => {
        const getUserByLogin = async () => {
            try {
                const response = await fetchUserByLogin(localStorage.login);
                setID(response.person.profile.id)
                setTextoPerfil(response.person.profile.texto);
                setTextoSecundario(response.person.profile.textoSecundario);
                setAbout(response.person.profile.about);
                setCorTexto(response.person.profile.color);
                setBackground(response.person.profile.background);
                setPosts(response.posts);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        getUserByLogin();
    }, []);

    useEffect(() => {
        isAuthenticated();
    }, []);


    const saveProfile = async (e) => {
        e.preventDefault();
        const body = {
            id: id,
            texto: textoPerfil,
            textoSecundario: textoSecundario,
            about: about,
            color: corTexto,
            background: background
        };

        try {
            await putProfile(body);
            setMsg({ text: 'Perfil atualizado com sucesso.', type: 'success' });
            setTimeout(() => window.location.href = '/workspace', 1500);
        } catch (error) {
            setMsg({ text: 'Erro ao alterar perfil.', type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
        <div className='bodyPage '>
            <Alert message={msg.text} type={msg.type} />
            <aside className="gallery-overview ">
                <div className="container pb-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-lg-10 py-2 d-flex justify-content-center">
                            <div className="card-0">
                                <h3>Personalizar</h3>
                                <p>
                                    Personalize seus dados do portfolio, Texto do perfil, texto secundario, sobre e as cores de texto e background. apos concluir, clique em salvar no final da pagina para gravar as alterações.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
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
                        </div>
                        <div className=" row col-lg-7 d-flex justify-content-center">
                            <div >
                                <h3 className='d-flex justify-content-center'>Pré visualização</h3>
                                <div id="posts-container" className="scaled-portfolio  ">

                                    <div style={{ width: '100%', height: '98%'}}>
                                        <iframe   id='myiframe'
                                            title= {localStorage.login}
                                            src= {`/portfolio/${localStorage.login}`}
                                            style={{ width: '100%', height: '100%' ,  }}
                                        />
                                    </div>
                                    {/* <Portfolio 
                                    posts={posts}
                                /> */}
                                </div>
                            </div>


                        </div>

                        {/* <div className="col-lg-4 scaled-portfolio">
                            <h3>Portfolio</h3>
                            <iframe src={iframeUrl} title="Portfolio" width="100%" height="600px" />
                        </div> */}
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Personalizar;
