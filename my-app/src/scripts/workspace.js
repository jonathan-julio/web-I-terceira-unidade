export const getInforUser = async () => {
    const host = 'http://localhost:8080/';
    const url = host + 'api/usuarios/login=' + localStorage.login;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        } else {
            
            const data = await response.json();
            localStorage.admin = data.admin;
            localStorage.id =data.id;
            return data;
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return { posts: [] };
    }
}
