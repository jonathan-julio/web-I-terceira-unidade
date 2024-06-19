import React, { useEffect, useState } from 'react';
import 'bootstrap';

import { isAuthenticated } from '../scripts/auth'; // Importe as funções
import { fetchAllPost } from '../services/apiService';
import PostCard from '../components/postCard';

function Workspace() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllPost();
                const posts = data.map(post => {
                    return post;
                });
                setPosts(posts);

            } catch (error) {
                console.log(error)
            }

        };
        fetchData();
    }, []);

    function editPost(id) {
        localStorage.editPost = id;
    }

    useEffect(() => {
        isAuthenticated();
    }, []);

    return (
        <div className='bodyPage mx-3'>
            <aside className="gallery-overview m-3 ">
                <div className="">
                    <div className="row">
                        <div className="col-lg-3 p-5">
                            <div className="card-0">
                                <h3>Seja bem vindo {sessionStorage.login}</h3>
                                <p>Ao lado está uma breve visualização das suas postagens e nelas as opções para ver mais ou editar.</p>
                                <a href="/new-post" className="btn btn-dark">Nova Postagem</a>
                            </div>
                        </div>
                        <div className="col d-flex row justify-content-center mx-0 mx-sm-4">
                            <h3 className='row d-flex justify-content-center'>Suas Publicações</h3>
                            <div id="posts-container">
                                <div className="container ">
                                    <div className="row " >
                                        {posts.length === 0 ? (
                                            <p>Nenhum post disponível.</p>
                                        ) : (
                                            posts.map(post => (
                                                <PostCard key={post.id} post={post} editPost={editPost} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Workspace;
