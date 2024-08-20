import React from 'react';

const PostCard = ({ post, editPost }) => {

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }
    return (
        <div className="col-sm-5 col-md-4 col-lg-4 d-flex my-3 mx-0" key={post.id} >
            <div className="card card-fixed p-0" >
                <div className="card-body card-body-fixed ">
                    <img id='img-card'
                        className="img-fluid pb-2"
                        src={post.img}
                        alt="Post Thumbnail"
                    />
                    <h5 className="card-title " style={{height : '20px'}}>{truncateText(post.titulo, 50)}</h5>
                    
                    <div id="descWord" className="card-text descWork pt-2">{truncateText(post.descricao, 122)}</div>
                </div >
                <div className='row d-flex justify-content-center m-2'>
                    <a target="_blank" rel="noreferrer" href={`/post/${post.id}`} onClick={() => editPost(post.id)} className="btn btn-dark m-1 ">Ver mais</a>
                    <a href={`/editar-post`} onClick={() => editPost(post.id)} className={`btn btn-danger m-1 ${post.admin === localStorage.login ? ("") : ("d-none")}`}>Editar</a>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
