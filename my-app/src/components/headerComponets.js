import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../imgs/jpeg/logo.jpg';


function HeaderComponets() {
    const [visibleSection, setVisibleSection] = useState('');
    const adminClass = (localStorage.role === 'ADMIN' || localStorage.role === 'MODERADOR') ? '' : 'd-none';
    useEffect(() => {

        const url = window.location.pathname;
        if (url === '/') {
            setVisibleSection('home');
        } else if (url === '/signin') {
            setVisibleSection('login');
        } else if (url === '/signup') {
            setVisibleSection('signup');
        }
        else if (url === '/reset-password'){
            setVisibleSection('reset');
        }
        else{
            setVisibleSection('user');
        }
    }, []);

    function logout(){
        localStorage.clear();
    }
    
    return (
        <div className="navbar-logo-left">
            <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" loading="lazy" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className={`navbar-nav ${visibleSection === 'user' ? '' : 'd-none'}`} id="header-user">
                            <li className="nav-item"><a className="nav-link" href="/workspace">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href={`/portfolio/${localStorage.login}`} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                            <li className={`nav-item ${adminClass}`}><a className="nav-link" href="/admin">Administrador</a></li>
                            <li id="" className="nav-item"><a className="nav-link" href="/personalizar">Personalizar</a></li>
                            <li id="" className="nav-item"><a className="nav-link" href="/editar-perfil">Perfil</a></li>
                            <li id="" onClick={() => logout()} className="nav-item"><a className="btn btn-dark ml-3 "   href="/">Sair</a></li>
                        </ul>
                        <ul className={`navbar-nav ${visibleSection === 'home' ? '' : 'd-none'}`} id="header-singup">
                            <li id="" className="nav-item"><a className="btn btn-dark ml-3" href="/signin">Ja sou membro</a></li>
                        </ul>
                        <ul className={`navbar-nav ${visibleSection === 'signup' ? '' : 'd-none'}`} id="header-singup">
                        <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                            <li id="" className="nav-item"><a className="btn btn-dark ml-3" href="/signin">Ja sou membro</a></li>
                        </ul>
                        <ul className={`navbar-nav ${visibleSection === 'login' ? '' : 'd-none'}`} id="header-login">
                            <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                            <li id="" className="nav-item"><a className="btn btn-dark ml-3" href="/signup">Cadastre-se</a></li>
                        </ul>
                        <ul className={`navbar-nav ${visibleSection === 'reset' ? '' : 'd-none'}`} id="header-login">
                            <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                            <li id="" className="nav-item"><a className="btn btn-dark ml-3" href="/signin">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponets;
