import {
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase/app";

const firebaseApp = () => {
  const GithubProvider = new GithubAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const logout = () => {
    return signOut(auth);
  };

  const signInGithub = () => {
    return signInWithPopup(auth, GithubProvider);
  };

  const signInFacebook = () => {
    return signInWithPopup(auth, FacebookProvider);
  };

  return { signInGithub, signInFacebook, logout };
};
export default firebaseApp;
