export async function REQUEST ( method, link , body){
    try {
        const response = await fetch(link, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(body),
        });
        if (response.status === 403) {
            localStorage.token = '';
            localStorage.login = '';
            window.location.href = '/login/';
            throw new Error('Acesso negado: 403 Forbidden');
        }
        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

export async function REQUESTNOBODY ( method, link ){
    try {
        const response = await fetch(link, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`,
            },
        });
        if (response.status === 403) {
            localStorage.token = '';
            localStorage.login = '';
            window.location.href = '/login/';
            throw new Error('Acesso negado: 403 Forbidden');
        }
        return response;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
