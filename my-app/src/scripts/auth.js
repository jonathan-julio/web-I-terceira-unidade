export const isLoggedIn = async (e) => {
    const loginStore = localStorage.login;
    const tokenStore = localStorage.token;
    
    if (tokenStore) {
        try {
            const response = await fetch('http://localhost:8080/api/usuarios/check-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "login":loginStore, "token":tokenStore }), // Envia login e senha no corpo da requisição
            });
            if (response.ok) {
                if (localStorage.getItem('token')) {
                    window.location.href = '/workspace';
                }
            }else{
                localStorage.setItem('login', "");
                localStorage.setItem('token', "");
            }
        }
        catch (error) {
            console.log('Usuário não autenticado');
        }
    }
};


export const isAuthenticated = async (e) => {
    const loginStore = localStorage.login;
    const tokenStore = localStorage.token;
    
    if (tokenStore && loginStore) {
        try {
            const response = await fetch('http://localhost:8080/api/usuarios/check-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "login":loginStore, "token":tokenStore }), // Envia login e senha no corpo da requisição
            });
            if (response.ok) {
                if (localStorage.getItem('token')) {
                    console.log('Usuário autenticado com sucesso!');
                }
            }else{
                localStorage.setItem('login', "");
                localStorage.setItem('token', "");
                window.location.href = '/';
            }
        }
        catch (error) {
            console.log('Usuário não autenticado');
            window.location.href = '/';
        }
    }
    else{
        console.log('Usuário não autenticado');
        window.location.href = '/';
    }
};

