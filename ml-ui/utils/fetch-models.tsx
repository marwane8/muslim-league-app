export const API_BASE_URL = 'http://localhost:8000'

export type UserData = {
    username: string,
    admin: number
}

export type PlayerData = {
    id: number,
    name: string, 
    number: number,
    pos: string 
}

export type TeamData= {
    id: number,
    name: string, 
    wins: number,
    loss: number,
    diff: number
}