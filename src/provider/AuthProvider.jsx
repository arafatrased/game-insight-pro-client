import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import {auth} from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [myReview, setMyreview] = useState([]);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const updateUserProfile = (updatedData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    },[])
    const userInfo = {
        user,
        loading,
        setUser,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        setMyreview,
        myReview,
        logInWithGoogle,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;