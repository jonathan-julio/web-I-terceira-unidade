import React from 'react';

function AccessForm({users, setUser, setAcesso, post}) {
    return (
        <div className=" col-md-6 col-lg-4  p-2">
            <div className="cold-flex justify-content-center">
                <form className="dadosPortfolio" onSubmit={post} >
                    <fieldset className="border pt-4 px-4 pb-5">
                        <legend className="w-auto">Alterar acesso</legend>
                        <div className="d-flex justify-content-start">Selecione o usuario:*</div>
                        <select className="form-control" onChange={(e) => setUser(e.target.value)}>
                            <option value="" disabled>Selecione um usuário</option>
                            {users.map((user, index) => (
                                <option key={index} value={user.id}>{user.login}</option>
                            ))}
                        </select>
                        <div className="d-flex justify-content-start">Selecione o acesso:*</div>
                        <select className="form-control"  onChange={(e) => setAcesso(e.target.value)}>
                            <option>Default select</option>
                            <option value="LIBERADO">LIBERAR</option>
                            <option value="BLOQUEADO">BLOQUEAR</option>
                        </select>
                        <div className="text-center pt-4">
                            <button type="submit" className="btn btn-dark">Alterar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
export default AccessForm;