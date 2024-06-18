import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'


create AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        localStorage.getItem('authTokens')
            ? JSON.stringify(localStorage.getItem('authTokens'))
            : null
    })


    const [user, setUser] = useState(() => {
        localStorage.getItem('authTokens')
            ? jwt_decode(localStorage.getItem('authTokens'))
            : null
    })

    const [loading, setLoading] = useState(true);

    const history = useHistory()

    const loginUser = async (email, password) => {
        const response = await fetch('http://127.0.0.1:8000/api/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        console.log(data);

        if(response.status == 200){
            
        }
    }

}