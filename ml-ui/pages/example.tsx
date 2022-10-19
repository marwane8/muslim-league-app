import { useState } from "react";
import { getAMessage } from "../utils/fetch-util";
import { useAuth } from "../context/AuthContext";


export default function Test() {
    
    
    const [name,setName] = useState('Bro');
    
    async function handleClick() {
        const mess = await getAMessage()
            .then(player => setName(player.name))
            .catch(error => console.log(error));
   }
    
    return (
        <div className="text-center h-96 bg-t-primary">
            <h1 className="bg-primary-50"> B TEST CLASS </h1>
            <button className="p-2 m-5 font-bold text-black rounded-md hover:bg-secondary bg-secondary-100"
                    onClick={handleClick}
            > Press Me </button>
            <p> Here is your data {name}</p>
            
        </div>
    );
}
