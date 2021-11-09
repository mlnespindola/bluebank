import React from "react";
import { useContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext(); //creating a context instance;

export function useAuth() {
  return useContext(AuthContext); //to consume the context later;
}

export function AuthProvider({ children }) {
  //returns a jsx element that includes the entire authentication proccess
  const auth = getAuth(); //built in firebase method for authentication
  const [loading, setLoading] = useState(true); //loading state for preventing the user from clicking multiple times on the button

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password); // the register function receives 2 params, which will return a firebase function that creates a user based on the entered email and password
  };

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //setting the user
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value = { 
    currentUser,
    register,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
