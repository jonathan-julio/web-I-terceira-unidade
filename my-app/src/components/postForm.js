import React from 'react';

const PostForm = ({ title, setTitle, descricao, setDescricao, github, setGithub, filePreview, handleFileChange, handleSave, handleDelete }) => {
    const isEditPost = window.location.pathname === '/editar-post';

    // Função para tratar o pressionamento da tecla Tab no textarea
    const handleTabKeyPress = (e) => {
        // Verifica se a tecla pressionada é o Tab (código 9)
        if (e.keyCode === 9) {
            e.preventDefault(); // Impede o comportamento padrão de mover o foco

            // Insere a tabulação no texto do textarea
            const { selectionStart, selectionEnd, value } = e.target;
            const newValue = value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
            const newSelectionStart = selectionStart + 1;

            // Atualiza o estado com o novo valor e a posição do cursor
            setDescricao(newValue);
            e.target.setSelectionRange(newSelectionStart, newSelectionStart);
        }
    };

    return (
        <div className="col">
            <h5 className='d-flex flex-wrap justify-content-start'>Título:*</h5>
            <input type="text" className="form-control" id="title-container" name="nome" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <div className='col-5'>
                <label className='d-flex flex-wrap justify-content-start' htmlFor="exampleFormControlFile1">
                    <h5 className='col d-flex flex-wrap justify-content-start'>Capa do projeto:*</h5>
                </label>
                <input encType="multipart/form-data" type="file" className="form-control-file col" id="exampleFormControlFile1" onChange={handleFileChange} accept=".jpeg,.jpg" required />
                {filePreview && <img src={filePreview} alt="Preview" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />}
            </div>

            <div>
                <h5 className='d-flex flex-wrap justify-content-start'>Descrição: *</h5>
                <textarea
                    onKeyDown={handleTabKeyPress} // Captura o evento onKeyDown
                    rows="10" className="form-control" id="descricao-container" placeholder="Adicione aqui uma descrição" aria-label="With textarea"
                    value={descricao} onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
            </div>

            <div className="col rounded float-center">
                <h5 className='d-flex flex-wrap justify-content-start'>Github: *</h5>
                <input type="text" className="form-control" id="git-container" name="nome" value={github} onChange={(e) => setGithub(e.target.value)} required />
            </div>
            {isEditPost && (
                <div className='col-2 d-flex float-start'>
                    <button onClick={handleDelete} className="btn btn-danger my-2">Deletar</button>
                </div>
            )}

            <div className="col ">
                <div className="col d-flex flex-row-reverse">
                    <button onClick={handleSave} className="btn btn-success my-2">Salvar</button>
                    <a href="/workspace" className="btn btn-secondary m-2">Cancelar</a>
                </div>
            </div>
        </div>
    );
};

export default PostForm;
