import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAN0uz5sGcLzG-JskcSGLg0Ij5KG1nU9as",
  authDomain: "todo-3b3a1.firebaseapp.com",
  databaseURL: "https://todo-3b3a1.firebaseio.com",
  projectId: "todo-3b3a1",
  storageBucket: "todo-3b3a1.appspot.com",
  messagingSenderId: "421815974833"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let db, auth;

if (typeof window !== "undefined") {
  db = firebase.database();
  auth = firebase.auth();
}

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
const GithubAuthProvider = new firebase.auth.GithubAuthProvider();
export {
  db,
  auth,
  GoogleAuthProvider,
  GithubAuthProvider,
};
