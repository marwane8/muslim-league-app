import { useState } from "react";
import { fetchName , getUser } from "../utils/http-fetch"

export default function Test() {
    const [name,setName] = useState('Bro');

    async function handleClick() {
        fetchName()
            .then(player => console.log(setName(player.name)))
            .catch(error => console.error(error));
        
        const token = localStorage.getItem('token')

        getUser(token)
            .then( user => console.log(user))
            .catch( error => console.log(error))
}
   
    return (
        <div className="text-center h-96 bg-t-primary">
            <h1 className="bg-bg-primary"> B TEST CLASS </h1>
            <button className="p-2 m-5 font-bold rounded-md hover:bg-bg-secondary bg-blue text-t-primary"
                    onClick={handleClick}
            > Press Me </button>
            <p> Here is your data {name}</p>
            
        </div>
    );
}

