import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    const logOut = () => {
        return signOut(auth)
    }

    // observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const updateUserProfile = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
    }

    const sendVerificationEmail = (user) => {
        return sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('check your email for verify your email')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        singInWithGoogle,
        sendVerificationEmail,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;