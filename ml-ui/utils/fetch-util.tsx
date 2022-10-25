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

    try {
        const res = await fetch(url,options);
        if (res.ok) {
            return res.json();

        }
    } catch (e) {
        console.log(e)
    }
    throw Error("Invalid Login Credentials")
}

export async function getStandings(season_id: number): Promise<PlayerData> {
    const query = "/standings/" + season_id;
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
    
    throw Error("Season not found")
}

export async function getRoster(team_id: number): Promise<PlayerData> {
    const query = "/roster/" + team_id;
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
    
    throw Error("Team not found")
}
