import { createContext, useState } from "react";
import authService from "../services/auth.services";


const AuthContext = createContext()


function AuthProviderWrapper(props) {

    const [user, setUser] = useState(false)


    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }


    const logout = () => {
        setUser(null)
        removeToken()
    }


    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser(data)
                })
                .catch(err => logout())
        } else {
            logout()
        }
    }


    const removeToken = () => {
        localStorage.removeItem('authToken')
    }




    return (
        <>
            <AuthContext.Provider value={{ user, authenticateUser, storeToken, logout }}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export { AuthContext, AuthProviderWrapper }

