import 'bootstrap';

function Password() {
    return (
        <div id="loginDiv" className="container d-flex pt-5 mt-5" >
            <form id="loginForm">
                <h5 className='d-flex m-4 justify-content-center custom-link text-decoration-none'>Recuperação de senha</h5>
                <div className="form-group p-2">
                    <input placeholder='E-mail do usuario' id="login" type="text" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-dark container mt-3 d-flex justify-content-center">Enviar</button>
            </form>
        </div>
    );
}

export default Password;
