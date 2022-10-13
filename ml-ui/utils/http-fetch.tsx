import { PlayerData, TokenSchema, UserData } from "./data-types";

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

function get(url: string) {
    
    const options: RequestInit =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(url,options)
}

export async function getUser(token: string | null): Promise<UserData> {
    
    const options: RequestInit =  {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    
    const url = API_BASE_URL + "/me";
    const response = await fetch(url,options);

    const data: UserData= await response.json()
    if (response.ok) {
        const user = data 
        if (user.username) {
            return Object.assign(user)
        } else {
            // error handling of internal data
            return Promise.reject(new Error(`Invalid Login Credentials`))
        }
    } else {
        // error handling at fetch level
        const error = new Error('Failed to Fetch')
        return Promise.reject(error)
    }
}



export async function login(formData: FormData): Promise<TokenSchema> {
    
    const url = API_BASE_URL + '/login';

    const options: RequestInit = {
            method: 'POST',
            body: formData
    }

   const response = await fetch(url,options);

    const data: TokenSchema = await response.json()
    if (response.ok) {
        const token = data 
        if (token.access_token) {
            return Object.assign(token)
        } else {
            // error handling of internal data
            return Promise.reject(new Error(`Invalid Username or Password`))
        }
    } else {
        // error handling at fetch level
        const error = new Error('Failed to Fetch')
        return Promise.reject(error)
        
    }
}