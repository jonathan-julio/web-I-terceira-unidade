import React from 'react';

function NewPortfolio() {
    return (
        <div className="bodyPage container">
            <div className="row">
                <div className="col-md-3 sidebar">
                    <div className="profile">
                        <img src="https://via.placeholder.com/150" alt="Profile Picture" />
                        <h3>Richard Hanrick</h3>
                        <p>Web Developer</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:richard@example.com">richard@example.com</a>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <a href="tel:+12133622706">+1 (213) 362-2706</a>
                            </li>
                            <li>
                                <i className="fas fa-calendar-alt"></i>
                                June 21, 1980
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                Sacramento, California, USA
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-9 main-content">
                    <div className="about-me">
                        <h2>Sobre mim</h2>
                        <p>Sou Diretor de Criação e UI/UX Designer em Sydney, Austrália, e trabalho com desenvolvimento web e mídia impressa. Gosto de transformar problemas complexos em designs simples, bonitos e intuitivos.</p>
                        <p>Meu trabalho é construir seu site de forma que seja funcional e fácil de usar, mas ao mesmo tempo atraente. Além disso, adiciono um toque pessoal ao seu produto e garanto que ele seja atraente e fácil de usar. Meu objetivo é transmitir sua mensagem e identidade da maneira mais criativa. Criei web design para muitas empresas de marcas famosas.</p>          </div>

                    <div className="skills">
                        <h2>O que estou fazendo</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="skill-card">
                                    <i className="fas fa-code"></i>
                                    <h3>Web Design</h3>
                                    <p>O design mais moderno e de alta qualidade feito a nível profissional.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill-card">
                                    <i className="fas fa-laptop-code"></i>
                                    <h3>Desenvolvimento Web</h3>
                                    <p>Desenvolvimento de sites de alta qualidade em nível profissional.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill-card">
                                    <i className="fas fa-mobile-alt"></i>
                                    <h3>Aplicativos móveis</h3>
                                    <p>Desenvolvimento profissional de aplicativos para iOS e Android.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill-card">
                                    <i className="fas fa-camera"></i>
                                    <h3>Fotografia</h3>
                                    <p>Faço fotos de alta qualidade de qualquer categoria em nível profissional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPortfolio;