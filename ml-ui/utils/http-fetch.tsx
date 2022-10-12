import { PlayerData } from "./data-types";

const API_BASE_URL = 'http://localhost:8000'


export async function fetchName(): Promise<PlayerData> {
    
    const query = "/get-by-name?name=Mike"
    const url = API_BASE_URL + query;

    const options: RequestInit =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(url,options);

    const data: PlayerData = await response.json()
    if (response.ok) {
        const player = data 
        if (player.id) {
            return Object.assign(player)
        } else {
            // error handling of internal data
            return Promise.reject(new Error(`Message not found`))
        }
    } else {
        // error handling at fetch level
        const error = new Error('Failed to Fetch')
        return Promise.reject(error)
        
    }
}




export function logIn(formData: FormData): Promise<Response> {
    const url = API_BASE_URL + '/login';

    const options: RequestInit = {
        method: 'POST',
        body: formData
   }

    return fetch(url,options);
}