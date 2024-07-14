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


    const [msg, setMsg] = useState({ text: '', type: '' });

    useEffect(() => {

        UserService.fetchUserByLogin(localStorage.login)
            .then(response => {
                setID(response.person.profile.id)
                setTextoPerfil(response.person.profile.texto);
                setTextoSecundario(response.person.profile.textoSecundario);
                setAbout(response.person.profile.about);
                setCorTexto(response.person.profile.color);
                setBackground(response.person.profile.background);

            })
            .catch(error => {
                setMsg({ text: error.message, type: 'error' });
                setTimeout(() => setMsg({ text: '', type: '' }), 1500);
            })

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
            background: background
        };
        ProfileService.putProfile(body)
        .then(() => {
            setMsg({ text: 'Perfil atualizado com sucesso.', type: 'success' });
            setTimeout(() => window.location.href = '/workspace', 1500);

        })
        .catch(error => {
            setMsg({ text: error.message , type: 'error' });
            setTimeout(() => setMsg({ text: '', type: '' }), 1500);
        })
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

                                    <div style={{ width: '100%', height: '98%' }}>
                                        <iframe id='myiframe'
                                            title={localStorage.login}
                                            src={`/portfolio/${localStorage.login}`}
                                            style={{ width: '100%', height: '100%', }}
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
