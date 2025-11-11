import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";


type AuthContextType = {
    user: User | null;
    session: Session | null;
    setAuth: ( payload :{
        user: User | null;
        session: Session | null
    }) => void;
};

const AuthContext = createContext<AuthContextType> ({
    user: null,
    session: null,
    setAuth: () => {},
});

export function AuthProvider({ children } : {children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    const setAuth = (payload: {user: User | null; session: Session | null}) => {
        setUser(payload.user);
        setSession(payload.session);
    };

    return (
        <AuthContext.Provider value={{user, session, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);