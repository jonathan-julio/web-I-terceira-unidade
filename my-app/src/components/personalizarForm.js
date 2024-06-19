import React from 'react';

const PersonalizarForm = ({texto, textoSecundario, color, background , about, saveProfile, setTextoPerfil, setTextoSecundario, setAbout, setCorTexto,setBackground, }) => {
    return (

        <form onSubmit={saveProfile} >
            <fieldset className="scheduler-border  dadosPortfolio" >
            <legend className="scheduler-border  text-start">Dados do portfolio</legend>
                <div className="form-group text-start">
                    <label htmlFor="texto">Texto do Perfil</label>
                    <input type="text" className="form-control" onChange={(e) => setTextoPerfil(e.target.value)} value={texto} id="texto" name="texto" required />
                </div>
                <div className="form-group text-start">
                    <label htmlFor="textoSecundario">Texto Secundário do Perfil</label>
                    <input type="text" className="form-control" onChange={(e) => setTextoSecundario(e.target.value)} value={textoSecundario} id="textoSecundario" name="textoSecundario" required />
                </div>
                <div className="form-group text-start">
                    <label htmlFor="about">Sobre</label>
                    <textarea className="form-control" id="about" onChange={(e) => setAbout(e.target.value)}  value={about} name="about" rows="9" required></textarea>
                </div>
                <div className="form-row d-flex text-start">
                    <div className="col">
                        <label htmlFor="color">Cor do texto</label>
                        <input type="color"  className="form-control" onChange={(e) => setCorTexto(e.target.value)} value={color} id="color" name="color" required />
                    </div>
                    <div className="col">
                        <label htmlFor="background">Cor de Fundo</label>
                        <input type="color" className="form-control" onChange={(e) => setBackground(e.target.value)} value={background}  id="background" name="background" required />
                    </div>
                </div>
                <div className="text-center mt-2">
                    <button type="submit" className="btn btn-dark">
                        Salvar
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

export default PersonalizarForm;
