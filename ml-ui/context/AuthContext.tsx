import { createContext, ReactElement, useContext } from 'react'
import { ReactNode } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const API_BASE_URL = 'http://localhost:8000'

export type AuthContextType = {
    user: boolean;
    login: (userCredentials: FormData) => Promise<void>;
    logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);
export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
}

export const AuthProvider = ({children}: Props) => {
    const [user,setUser] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const router = useRouter();

    // Login User 
    const login = async (userCredentials: FormData) => {

        console.log('Logging In')
        const url = API_BASE_URL + '/login';
        const options: RequestInit = {
            method: 'POST',
            credentials: 'include',
            body: userCredentials 
        }

        const response = await fetch(url,options);
        const data = await response.json();
        console.log(response.status);
        if (response.status === 200) {
            router.push('/admin');
            console.log(data);
        } else {
            console.log("something went wrong!");
        }

   }

    // Logout User
    const logout = () => {
        console.log('Logged Out');
    }

    const value = {
        user,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
           {children} 
        </AuthContext.Provider>
    )
}