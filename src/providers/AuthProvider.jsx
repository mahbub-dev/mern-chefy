import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { createContext, useState, useEffect } from "react"
import app from "../../firebase.config"
export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState('')
    const [isLoggedIn, setIsloggedIn] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            setIsloggedIn(true)
        }
    }, [])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser('')
            }
        });
        return () => unsubscribe()
    }, [auth, isLoggedIn])

    const logOut = () => {
        signOut(auth)
        localStorage.clear()
        window.location.reload()

    }
    const info = { user, isLoggedIn, setIsloggedIn,logOut }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider