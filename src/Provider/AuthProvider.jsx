import React, { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // ! creat user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ? log in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ! sign out
  const logOut = () => {
    return signOut(auth);
  };

  // ? find user
  useEffect(() => {
    const off = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
    });
    return () => {
      return off;
    };
  }, []);

  // const user = null;
  const authInfo = { user, createUser, loginUser, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
