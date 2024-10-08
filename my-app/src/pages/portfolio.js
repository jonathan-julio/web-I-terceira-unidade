import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../scripts/services/userService';
import styles from '../components/portfolio.module.css'; // Importação dos estilos CSS

function Portfolio() {
    const [posts, setPosts] = useState([]);
    const [about, setAbout] = useState('');
    const [background, setBackground] = useState('');
    const [color, setColor] = useState('');
    const [texto, setTexto] = useState('');
    const [textoSecundario, setTextoSecundario] = useState('');
    const [usarHtmlProprio, setUsarHtmlProprio] = useState(false); // Novo estado para o checkbox
    const [html, setHtml] = useState('');
    const [nome, setNome] = useState('');
    const [loading, setLoading] = useState(true);
    const {username } = useParams();

    useEffect(() => {
        if (username) {
            UserService.fetchUserByLogin(username)
                .then(response => {
                    setPosts(response.posts);
                    setTexto(response.person.profile.texto);
                    setTextoSecundario(response.person.profile.textoSecundario);
                    setColor(response.person.profile.color);
                    setBackground(response.person.profile.background);
                    setAbout(response.person.profile.about);
                    setUsarHtmlProprio(response.person.profile.isHtml === "true" ? true : false);
                    setHtml(response.person.profile.html);
                    setNome(response.person.nome);
                })
                .catch(() => {
                    window.location.href = '/pagina-nao-encontrada';
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [username]);

    if (loading) {
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }
    const Header = () => {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img id="logo" src="/img/logo.jpg" alt="Logo" />
                </div>
                <div className={styles.searchBox}>
                    <ul className={styles.menuItems}>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#endIntro">Projetos</a></li>
                        <li><a href="#endTimeline">Sobre</a></li>
                    </ul>
                </div>
            </header>
        );
    };

    const Section = () => {
        return (
            <section id={styles.sectionIntro} className={styles.sectionLayout}>
                <div>
                    <h1>{nome}</h1>
                </div>
                <div className={styles.sectionIntroText} dangerouslySetInnerHTML={{ __html: texto }} />
                <div className={styles.sectionIntroLink}>
                    <a href="#endIntro">Saiba mais</a>
                </div>
                <div id={styles.sectionIntroIcon} dangerouslySetInnerHTML={{ __html: textoSecundario }} />
            </section>
        );
    };
    

    const Projects = () => {
        return (
            <section className={styles.sectionProjects}>
                <div>
                    <h2>Meus projetos</h2>
                </div>
                <div className={styles.gridContainer}>
                    {posts.length === 0 ? (
                        <div className={styles.gridContainerEmpty}>
                            <p>Nenhum projeto cadastrado.</p>
                        </div>
                    ) : (
                        posts.map((post, index) => (
                            <a key={post.id} href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer">
                                <div className={styles.gridItem}>
                                    <img src={post.img} alt={`Foto ${index + 1}`} />
                                    <div id={styles.TitlePost}>{post.titulo}</div>
                                </div>
                            </a>
                        ))
                    )}
                </div>
                <div>
                    <a href="#endTimeline">
                        <button className={styles.arrowButton}><span className={styles.arrowDown}></span></button>
                    </a>
                </div>
            </section>
        );
    };
    

    const About = () => {
        return (
            <section id="about" className={styles.sectionAbout}>
                <div>
                    <h2>Sobre</h2>
                </div>
                <div className={styles.layoutAbout}>
                    <div id={styles.sectionIntroIcon}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Icon" />
                    </div>
                    <div id={styles.s1eAbout}>{about}</div>
                </div>
            </section>
        );
    };



    if (usarHtmlProprio) {
        return (
            <div dangerouslySetInnerHTML={{ __html: html }} />
        );
    }

    return (
        <div className={`${styles.container} pb-5 `} style={{ color: color, background: `linear-gradient(to bottom, ${background}, #3d3d3d)` }}>
            <Header />
            <Section />
            <Projects />
            <About />
        </div>
    );
}



export default Portfolio;
