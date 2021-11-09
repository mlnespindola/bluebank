import { getAuth } from "@firebase/auth";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import React from "react";

export default function Wallet() {
  const auth = getAuth();
  const {currentUser} = useAuth();
  console.log(auth.currentUser);

  if (auth.currentUser == null) {
    return <Redirect to="/register" />;
  }
  return <div> {currentUser && currentUser.email} </div>;
}
