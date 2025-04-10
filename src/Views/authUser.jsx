import { Outlet, useLocation, useNavigate } from "react-router"
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../functions/firebase"


const AuthUser = () => {

    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        // Observador de estado de autenticación
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                navigate("/")
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [location]);

    const context = { user, setUser }

    return (
            <Outlet context={context} />
    )
}

export default AuthUser