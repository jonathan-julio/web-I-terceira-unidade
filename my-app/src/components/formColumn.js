import React from 'react';

function FormColumn({ title, users, setUser, value, fetch, selectedUser }) {
    return (
        <div className="col-lg-6 p-2">
            <div className="">
                <form className="dadosPortfolio" onSubmit={fetch}>
                    <fieldset className="border p-4">
                        <legend className="w-auto">{title}</legend>
                        {title !== "Buscar bloqueados" ? (
                            <div>
                                <div className="d-flex justify-content-start">Selecione o usuário:*</div>
                                <select
                                    className="form-control"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={selectedUser} // Usando o value para controlar o estado
                                >
                                    <option value="" disabled>Selecione um usuário</option>
                                    {users.map((user, index) => (
                                        <option key={index} value={user.id}>{user.login}</option>
                                    ))}
                                </select>
                            </div>
                        ) : (<div className='m-2' ></div>)}

                        <textarea
                            rows={title !== "Buscar bloqueados" ? '5' : '8'}
                            className="form-control mt-2"
                            placeholder='Clique em buscar'
                            aria-label="With textarea"
                            value={value}
                            disabled
                        ></textarea>
                        <div className="text-center pt-2">
                            <button type="submit" className="btn btn-dark">Buscar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default FormColumn;
