import React from "react";
import PropTypes from "prop-types";
import { auth } from "../Firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
// import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, pin) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pin);
  };

  const updateUser = (userName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: userName });
  };

  const loginUser = async (email, pin) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, pin);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = { user, loading, createUser, updateUser, loginUser, logOutUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.node };

export default AuthProvider;
