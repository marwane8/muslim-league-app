import { createContext, useContext } from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Cookie from "js-cookie";
import { API_CLIENT_URL, UserData } from '../utils/fetch-models';

export type Auth = {
    user: UserData | null;
    isLoading: boolean;
    login: (userCredentials: FormData) => Promise<void>;
    logout: () => void;
    error: string;

}


const AuthContext = createContext<Auth>({} as Auth);
export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
}

export const AuthProvider = ({children}: Props) => {
    const [user,setUser] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    // Login User 
    const login = async (userCredentials: FormData) => {

        console.log('Logging In')
        const url = API_CLIENT_URL + '/login';
        const options: RequestInit = {
            method: 'POST',
            credentials: 'include',
            body: userCredentials 
        }
        setIsLoading(true);
        try {
            const response = await fetch(url,options);
            
            const data = await response.json();
            
            if (response.status === 200) {
                setError('');
                setUser(data);
                router.push('/admin');
            } else if(response.status === 401){
                setError(data.detail);
            } else {
                setError("Server Request Error");
            }

        } catch (e) {
            setError("Server Error");
            console.error("Fetch Failed: ", e);
        } finally {
            setIsLoading(false);
        }
    }
    
    // Logout User
    const logout = async () => {
        console.log('Logging Out');

        setIsLoading(true);
        const jwt = Cookie.get('token');

        const url = API_CLIENT_URL + '/logout';
        const options: RequestInit = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }
        
        try {
            const response = await fetch(url,options);
            const data = await response.json();
            if (response.status === 200) {
                setError('');
                setUser(null);
                router.push('/')
                console.log(data.mesage)
            } else {
                setError("Server Request Error")
                console.error("Invalid Request")
            }
        } catch (e) {
            setError("Server Error");
            console.error("Fetch Failed: ", e);
        } finally {
            setIsLoading(false);
        }
   }

    const value = {
        user,
        isLoading,
        login,
        logout,
        error
    }

    return (
        <AuthContext.Provider value={value}>
            {children} 
        </AuthContext.Provider>
    )
}