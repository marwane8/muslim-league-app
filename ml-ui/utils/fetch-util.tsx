import { PlayerData, UserData } from "./data-types";

const API_BASE_URL = 'http://localhost:8000'

export async function getAMessage(): Promise<PlayerData> {
    const query = "/get-by-name?name=Mike"
    const url = API_BASE_URL + query;

    const options: RequestInit =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res  = await fetch(url,options);
        if (res.ok) {
        return res.json();
        }
    } catch (e) {
        console.log(e)
    }
    
    throw Error("User not found")
}

export async function getUserInfo(token: string | null): Promise<UserData> {
    const options: RequestInit =  {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    
    const url = API_BASE_URL + "/me";

    const user: UserData = await fetchJson(url,options);
    if (user.username) {
       return user;
    }

    throw Error("Invalid Login Credentials")
}

//------------------------------------------------
// Fetch Boiler Plate

export async function fetchJson<JSON = unknown>(
    input: RequestInfo,
    init?: RequestInit 
): Promise<JSON> {
    
    try {

        const response = await fetch(input,init);

        const data = await response.json();
        if (response.ok) {
            return data
        }

    } catch (e) {  }
}

export class FetchError extends Error {
    response: Response;

    data: {
        message: string;
    };

    constructor({
        message,
        response,
        data,
    }: {
        message: string;
        response: Response;
        data: {
            message: string;
        };
    }) {
        super(message);
        
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FetchError);
        }
    
        this.name = "FetchError";
        this.response = response;
        this.data = data ?? { message: message};
    }
}
