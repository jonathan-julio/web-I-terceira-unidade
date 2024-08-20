import React from 'react';
import logo from '../imgs/jpeg/logo.jpg';

function Portfolio({ posts }) {
  const profile = {
    color: '#0000FF',
    background: '#FFFFFF',
    texto: 'Eh isso ai ',
    textoSecundario: 'Software Developer at XYZ Corp.',
    about: 'Passionate about coding and technology.'
  };

  const person = {
    nome: 'John Doe'
  };

  function Header() {
    return (
      <header>
        <div className="logo">
          <img id="logoPortfolio" src={logo} alt="Logo" />
        </div>
        <div id="expanded-header"></div>
        <div className="search-box">
          <ul className="menu-items">
            <li><a href="/user/workspace/">Inicio</a></li>
            <li><a href="#endIntro">Projetos</a></li>
            <li><a href="#endTimeline">Sobre</a></li>
          </ul>
        </div>
      </header>
    );
  }

  function IntroSection({ profile, person }) {
    return (
      <section className="section-layout">
        <div id="section-intro">
          <div id="s1d-nome">
            <h1>{person.nome}</h1>
          </div>
          <div className="text-container">
            <div id="s1d-texto" className="text-box">
              {profile.texto}
            </div>
            <div id="s1e-textoSecundario" className="text-box">
              {profile.textoSecundario}
            </div>
          </div>
        </div>
      </section>
    );
}

  function ProjectsSection({ posts }) {
    return (
      <section className="section-projects">
        <div><h2>Meus projetos</h2></div>
        <div className="grid-container">
          {posts.length === 0 ? (
            <div className="grid-container-empty">
              <p>Nenhum projeto cadastrado.</p>
            </div>
          ) : (
            posts.map((post, index) => (
              <div key={index}>
                <a href={post.github}>
                  <div className="grid-item">
                    <img src={post.img} alt={`Foto ${index}`} />
                    <div id="Title-post">{post.titulo}</div>
                    <p>{post.descricao}</p>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
        <div>
          <a href="#endTimeline">
            <button className="arrow-button"><span className="arrow-down"></span></button>
          </a>
        </div>
      </section>
    );
  }

  function AboutSection({ profile }) {
    return (
      <section id="about" className="section-about">
        <div><h2>Sobre</h2></div>
        <div className="layout-about">
          <div id="section-intro-icon">
            <img id="s1d" style={{ height: '4%', maxWidth: '300px' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Ícone" />
          </div>
          <div id="text-about">
            <div id="s1e-about">{profile.about}</div>
          </div>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <div className="footer">
        <footer>
          <p>&copy; {new Date().getFullYear()} Jonathan Julio - Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  }

  return (
    <div style={{ color: profile.color, background: `linear-gradient(to bottom, ${profile.background}, #3d3d3d)` }}>
      <Header />
      <IntroSection profile={profile} person={person} />
      <ProjectsSection posts={posts} />
      <AboutSection profile={profile} />
      <Footer />
    </div>
  );
}

export default Portfolio;
