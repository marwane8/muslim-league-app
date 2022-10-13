
export type TokenSchema = {
    access_token: string,
    refresh_token: string
}

export type UserData = {
    username: string,
    admin: number
}

export type PlayerData = {
    id: number,
    name: string, 
    pos: string 
}