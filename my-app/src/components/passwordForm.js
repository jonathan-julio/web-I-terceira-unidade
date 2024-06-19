import React from 'react';


const PasswordForm = ({ patchPassword, lastPassword, setLastPassword, password, setPassword, checkpassword, setCheckPassword }) => {
    

    return (
        <form onSubmit={patchPassword} >
            <fieldset className="scheduler-border">
                <legend className="scheduler-border  text-start">Alterar sua senha</legend>
                <div className="form-group text-start">
                    <label htmlFor="text">Senha atual</label>
                    <input type="password" className="form-control" id="lastPassword" name="lastPassword" value={lastPassword} onChange={(e) => setLastPassword(e.target.value)} required />
                    
                </div>
                <div className="form-group text-start">
                    <label htmlFor="password">Nova Senha</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="password" name="password" required />
                    
                </div>
                <div className="form-group text-start">
                    <label htmlFor="checkpassword">Confirme a nova senha</label>
                    <input type="password" onChange={(e) => setCheckPassword(e.target.value)} value={checkpassword} className="form-control" id="checkpassword" name="checkpassword" required />
                </div>
                <div className="text-center text-start m-1 ">
                    <button  type="submit" className="btn btn-dark">
                        Salvar
                    </button>
                </div>
            </fieldset>
        </form>
    );
};

export default PasswordForm;
