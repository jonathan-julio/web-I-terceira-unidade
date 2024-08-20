import React from 'react';
import 'bootstrap';
import logo from '../imgs/jpeg/gatinho.png';

function Home() {
    return (
        <div className="container">
            <h1 className="mb-4 pt-5">Bem-vindo ao Nosso portfolio</h1>
            <div className="row pt-2">
                <div className="col-md-8 text-monospace">
                    <p className="mb-4 text-md-left">Crie e compartilhe seu portfólio profissional de maneira fácil e intuitiva. No Nosso portfolio, você pode:<br />
                        Construir seu portfólio: Adicione projetos e mostre suas habilidades e experiências.<br />
                        Colaborar com outros: Marque outros profissionais como participantes dos seus projetos e mostre o trabalho em equipe.<br />
                        Exibir seu talento: Deixe seu portfólio disponível para qualquer pessoa visualizar e descubra novas oportunidades de networking e carreira.<br /><br />
                        Junte-se à nossa comunidade e comece a destacar suas realizações hoje mesmo!
                    </p>
                    <a href="/signup" className="btn btn-dark mt-4">Cadastre-se</a>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={logo} alt="Gatinho" />
                </div>
            </div>
        </div>
    );
}

export default Home;
