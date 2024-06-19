// services/apiService.js

const API_URL = 'http://localhost:8080/api';

export const createUser = async (body) => {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (response.status === 201 ) {
        return response;
    }
    else{
        throw new Error('Network response was not ok: ' + response.status + ' ' + response.statusText);
    }
   
};

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/usuarios/all`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const createPost = async (body) => {
    const response = await fetch(`${API_URL}/post`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.token}`,
        },
        body: body,
    });
    if (!response.ok) {
        if (response.status === 403) {
            localStorage.token = '';
            localStorage.login = '';
            window.location.href = '/login/';
            throw new Error('Acesso negado: 403 Forbidden');
        }
        throw new Error('Network response was not ok: ' + response.status + ' ' + response.statusText);
    }
    return response.json();
};

export const fetchPost = async (postId) => {
    const response = await fetch(`${API_URL}/post/${postId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const fetchUserByLogin = async (login) => {
    const response = await fetch(`${API_URL}/usuarios/login=${login}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const updatePost = async (body) => {
    const response = await fetch(`${API_URL}/post/edit`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${localStorage.token}`,},
        body: body,
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const deletePost = async (postId) => {
    const response = await fetch(`${API_URL}/post/delete=${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const patchPassword = async (body) => {
    const response = await fetch(`${API_URL}/usuarios/patch-password`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};


export const patchPerson = async (body) => {
    const response = await fetch(`${API_URL}/person/patch`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};


export const fetchPerson = async () => {
    const response = await fetch(`${API_URL}/person/${localStorage.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const putProfile = async (body) => {
    const response = await fetch(`${API_URL}/profile/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
};

export const uploadImagem = async (imagemFile) => {
    if (!imagemFile) {
        console.error('Nenhum arquivo selecionado');
        return;
    }
    const formData = new FormData();
    formData.append('imagemFile', imagemFile);
    try {
        const response = await fetch(`${API_URL}/usuarios/imagem`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${localStorage.token}` },
            body: formData,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
    }
};

export const fetchLogs = async (id) => {
    const response = await fetch(`${API_URL}/admin/logs/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
    });
    if (response.ok) {
        return response.json();
    }
    if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }else{
        throw new Error('Erro inesperado.');
    }
};

export const fetchBlocked = async () => {
    const response = await fetch(`${API_URL}/admin/bloqueados`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        
    });
    if (response.ok) {
        return response.json();
    }
    if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }else{
        throw new Error('Erro inesperado.');
    }
};

export const postPermissao = async (body) => {
    const response = await fetch(`${API_URL}/admin/alterar-papel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        body: JSON.stringify(body),
    });
    if (response.ok) {
        return response;
    }
    if (response.status === 304) {
        throw new Error('Isso eh uma ditadura e johndoe sera o unico ADMIN');
    }if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }else{
        throw new Error('Erro inesperado.');
    }
};

export const postAcesso = async (body) => {
    const response = await fetch(`${API_URL}/admin/acesso-usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        body: JSON.stringify(body),
    });
    if (response.ok) {
        return response;
        /* throw new Error('Network response was not ok ' + response.code); */
    }
    if (response.status === 304) {
        throw new Error('Não pode bloquear o ADMIN');
    
    }if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }else{
        throw new Error('Erro inesperado.');
    }
};

export const patchPasswordAdmin = async (body) => {
    const response = await fetch(`${API_URL}/admin/patch-password`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        body: JSON.stringify(body),
    });
    if (response.ok) {
        return response.json();
    }
    if (response.status === 304) {
        throw new Error('Senha de ter no minimo 8 caracteres e incluir 2 numeros');
    
    }if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }else{
        throw new Error('Erro inesperado.');
    }
};


export const fetchAllPost = async () => {
    const response = await fetch(`${API_URL}/post/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.token}`,},
        
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }
    return response.json();
};

export const fetchPostById = async (id) => {
    const response = await fetch(`${API_URL}/post/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }
    return response.json();
};

export const fetchProfileByUsername = async (username) => {
    const response = await fetch(`${API_URL}/usuarios/login=${username}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    if (response.status === 403) {
        throw new Error('Usuario não autorizado');
    }
    return response.json();
};
