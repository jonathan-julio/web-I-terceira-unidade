import React from 'react';

const ErrorPage = () => {

    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="container text-center pt-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-1">404</h1>
                    <p className="lead">Oops! Página não encontrada.</p>
                    <p>Desculpe, mas a página que você está procurando não existe.</p>
                    <button  onClick={handleGoHome}>Voltar para a Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
