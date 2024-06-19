import React from 'react';

const PostCard = ({ post, editPost }) => {
    return (
        <div className="col-sm-6 col-md-4  col-lg-4  d-flex justify-content-center my-3" key={post.id}  id='card'>
            <div className="card card-fixed p-0" >
                <div className="card-body card-body-fixed ">
                    <img
                        className="img-fluid pb-2 rounded"
                        src={post.img}
                        alt="Post Thumbnail"
                    />
                    <h5 className="card-title">{post.titulo}</h5>
                    <div className="card-text descWork mb-1">{post.descricao}</div>
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
