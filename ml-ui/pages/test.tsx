import { useState } from "react";
import { getMessage } from "../utils/http-fetch"

export default function Test() {
    const [name,setName] = useState('Bro');

    async function handleClick() {
        const message = await getMessage()
        const data = await message.json()
        setName(data.message)
    }
   
    return (
        <div className="text-center h-96 bg-t-primary">
            <h1 className="bg-bg-primary" > B TEST CLASS </h1>
            <button className="p-2 m-5 font-bold rounded-md hover:bg-bg-secondary bg-blue text-t-primary"
                    onClick={handleClick}
            > Press Me </button>
            <p> Here is your data {name}</p>
            
            
        </div>
    );
}

