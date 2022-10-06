
const API_BASE_URL = 'http://localhost:8000'

function get(url: string){
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, options);
}

function post(url: string, body: any){
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    return fetch(url, options);
}

export function getMessage() {
    const url = API_BASE_URL + '/';
    return get(url)
}