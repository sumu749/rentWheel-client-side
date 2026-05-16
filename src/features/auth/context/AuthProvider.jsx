/* eslint-disable react-refresh/only-export-components */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    getAuth,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../../../firebase/firebase.config";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    };

    // logout
    const logOut = () => {
        return signOut(auth);
    };

    // update profile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOut,
        updateUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
