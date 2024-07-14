import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import PostService from '../scripts/services/postService';

function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {

        PostService.fetchPostById(id)
            .then(response => {
                setPost(response);
            })
            .catch(() => {
                window.location.href = '/pagina-nao-encontrada';
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id]);

    const createMarkup = (html) => {
        // Transform newline characters into <br> tags
        let htmlWithLineBreaks = html.replace(/\n/g, '<br>');
        // Transform tab characters into &nbsp;&nbsp; for visual indentation
        htmlWithLineBreaks = htmlWithLineBreaks.replace(/\t/g, '&nbsp;&nbsp;');
        // Sanitize the HTML
        return { __html: DOMPurify.sanitize(htmlWithLineBreaks) };
    };

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div className='bodyPage mx-5 px-lg-5'>
            <div className='content2 m-lg-5'>
                <h3 className='mb-4'>{post.titulo}</h3>
                <div id='imgPost'>
                    <img src={post.img} alt="Imagem do post" className="img-fluid rounded" />
                </div>
                <p className='text-box' id='text' dangerouslySetInnerHTML={createMarkup(post.descricao)} />
                <a href={post.github}>Github</a>
            </div>
        </div>
    );
}

export default Post;
