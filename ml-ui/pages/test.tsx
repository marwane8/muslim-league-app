import { useState } from "react";
import { fetchName , logIn } from "../utils/http-fetch"

export default function Test() {
    const [name,setName] = useState('Bro');

    async function handleSubmit() {
        const formData = new FormData();

        const user = 'admin';
        const pass = 'bismillah114'
        formData.append('username', user);
        formData.append('password', pass);
        const res = await logIn(formData)
        const load = await res.json();
        console.log(load);

    }
    async function handleClick() {
        fetchName()
            .then(player => console.log(setName(player.name)))
            .catch(error => console.error(error))
    }
   
    return (
        <div className="text-center h-96 bg-t-primary">
            <h1 className="bg-bg-primary"> B TEST CLASS </h1>
            <button className="p-2 m-5 font-bold rounded-md hover:bg-bg-secondary bg-blue text-t-primary"
                    onClick={handleClick}
            > Press Me </button>
            <p> Here is your data {name}</p>
             <button className="p-2 m-5 font-bold rounded-md hover:bg-bg-secondary bg-blue text-t-primary"
                    onClick={handleSubmit}
            > Submit Me </button>

            
        </div>
    );
}

