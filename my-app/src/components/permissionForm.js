import React from 'react';


function PermissionForm({ users, setUser , setPermissao, post}) {
    return (
        <div className=" col-md-6 col-lg-4 p-2">
            <div className="cold-flex justify-content-center">
                <form className="dadosPortfolio" onSubmit={post} >
                    <fieldset className="border pt-4 px-4 pb-5">
                        <legend className="w-auto">Alterar permissões</legend>
                        <div className="d-flex justify-content-start">Selecione o usuario:*</div>
                        <select className="form-control" onChange={(e) => setUser(e.target.value)}>
                            <option value="" disabled>Selecione um usuário</option>
                            {users.map((user, index) => (
                                <option key={index} value={user.id}>{user.login}</option>
                            ))}
                        </select>
                        <div className="d-flex justify-content-start">Selecione a permissão:*</div>
                        <select className="form-control" onChange={(e) => setPermissao(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="MODERADOR">MODERADOR</option>
                            <option value="USER">USER</option>
                            <option value="ESPECIAL">ESPECIAL</option>
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

export default PermissionForm;