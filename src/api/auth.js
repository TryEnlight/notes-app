import {
  auth,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider
} from "./firebase";
import firebase from "firebase/app";
import { removePresence } from "./db";

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign in with Google
export const doSignInWithGoogle = () =>
  auth.signInWithPopup(GoogleAuthProvider);

// Sign in with Github
export const doSignInWithGithub = () =>
  auth.signInWithPopup(GithubAuthProvider);

// Sign in with Github
export const doSignInWithTwitter = () =>
  auth.signInWithPopup(TwitterAuthProvider);

// Sign out
export const doSignOut = () => {
  auth.signOut();
};

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export { auth };
