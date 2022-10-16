import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function Login() {
  
  const { user, login, logout } = useAuth(); 
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function handleUserChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
   
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
 
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    
    login(formData);
 
 }

  
  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-5 space-y-8 rounded-md bg-t-primary"> 
            <h2 className="text-3xl font-bold text-center"> 
                Admin Sign In    
            </h2>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="username" className="sr-only">
                        Username 
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="relative block w-full px-3 py-2 border rounded-none appearance-none rounded-t-md focus:z-10 focus:outline-none sm:text-sm"
                      placeholder="Username"
                      value={username}
                      onChange={handleUserChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full px-3 py-2 border rounded-none appearance-none rounded-b-md focus:z-10 focus:outline-none sm:text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md text-t-primary white bg-green group hover:bg-bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
        </div>
    </div>
  );
}