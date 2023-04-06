import React, { useState, useContext } from "react";
import { User } from "./User";
 
type AuthContextProps = {
    isAuthenticated :boolean;
    isLoading: boolean;
    setAuthenticatedUserDetails:(userDetails:User) => void;
    logout:()=>void;
    user: User | null;
};

const defaultContextProps: AuthContextProps= {
    isAuthenticated : false,
    isLoading:false,
    setAuthenticatedUserDetails:(userDetails:User) => {},
    logout:()=>{},
    user: null
};

export const AuthContext = React.createContext(
    defaultContextProps);
export const useAuth = () => useContext(AuthContext);

type Props = {
    children?: React.ReactNode
  };
 
export const AuthProvider = ({
    children}: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUserDetails] = useState<null | User>(null);
  
    const setAuthenticatedUserDetails = (user:User) =>
    {
        setUserDetails(user);
        setIsLoading(false);
        setIsAuthenticated(true);
    } 

    const logout = () =>
    {
        setUserDetails(null);
        setIsLoading(false);
        setIsAuthenticated(false);
    } 

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                setAuthenticatedUserDetails,
                logout,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};