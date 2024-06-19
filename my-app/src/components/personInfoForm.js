import React from 'react';

const PersonalInfoForm = ({ nome,
    setNome,
    data,
    sexo,
    setSexo,handleSavePerson }) => {
    return (
        <form onSubmit={handleSavePerson}>
            <fieldset className="scheduler-border">
                <legend className="scheduler-border">Dados do perfil</legend>
                <div className="form-group text-start">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} id="nome" name="nome" required />
                </div>
                <div className="form-group text-start">
                    <label htmlFor="data">Data de Nascimento</label>
                    <input type="date" className="form-control" id="data" value={data}  name="data" required disabled />
                </div>
                <div className="form-group text-start">
                    <label htmlFor="sexo">Sexo</label>
                    <select className="form-control" id="sexo" name="sexo" onChange={(e) => setSexo(e.target.value)} value={sexo} required>
                        <option value="">Selecione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="O">Outro</option>
                    </select>
                </div>
                <div className="text-center m-1">
                    <button type="submit" className="btn btn-dark">
                        Salvar
                    </button>
                </div>
            </fieldset>
        </form>
        /* <form className="col d-flex">
            <div className="form-group p-2">
                <label htmlFor="nome">Nome</label>
                <input type="text" className="form-control" id="nome" name="nome" required />
            </div>
            <div className="form-group p-2">
                <label htmlFor="data">Data de Nascimento</label>
                <input type="date" className="form-control" id="data" name="data" required disabled />
            </div>
            <div className="form-group p-2">
                <label htmlFor="sexo">Sexo</label>
                <select className="form-control" id="sexo" name="sexo" required>
                    <option value="">Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="mb-5 d-flex justify-content-center">
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Salvar
                    </button>
                </div>
            </div>
        </form> */
    );
};

export default PersonalInfoForm;
