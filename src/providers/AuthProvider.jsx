import { getAuth, onAuthStateChanged } from "firebase/auth"
import { createContext, useState, useEffect } from "react"
import app from "../../firebase.config"
export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser('')
            }
        });
    }, [auth])

    const info = { user }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider