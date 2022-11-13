export {API_BASE_URL,API_CLIENT_URL,JWT_KEY}

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000'

let API_CLIENT_URL: string | undefined = process.env.NEXT_PUBLIC_CLIENT_URL ||'http://localhost:8000'
let JWT_KEY: string | undefined = process.env.NEXT_PUBLIC_JWT_KEY || 'key1'

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