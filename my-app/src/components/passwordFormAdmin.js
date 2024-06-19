import React from 'react';

function PasswordForm({users, setUser, password, setPasswrd, checkPassword, setCheckPassword,  submit}) {
    return (
        <div className=" col-md-6 col-lg-4 p-2">
            <div className="cold-flex justify-content-center">
                <form className="dadosPortfolio"  onSubmit={submit}>
                    <fieldset className="border pt-4 px-4">
                        <legend className="w-auto">Alterar senha</legend>
                        <div className="d-flex justify-content-start">Selecione o usuario:*</div>
                        <select className="form-control" onChange={(e) => setUser(e.target.value)}>
                            <option value="" disabled>Selecione um usuário</option>
                            {users.map((user, index) => (
                                <option key={index} value={user.id}>{user.login}</option>
                            ))}
                        </select>
                        <div className="form-group  justify-content-start">
                            <label className="d-flex justify-content-start" htmlFor="newPassword">Nova Senha</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPasswrd(e.target.value)} id="newPassword" required />
                        </div>
                        <div className="form-group">
                            <label className="d-flex justify-content-start" htmlFor="confirmPassword">Confirme a nova senha</label>
                            <input type="password" className="form-control" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)}id="confirmPassword" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-dark m-1">Alterar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default PasswordForm;