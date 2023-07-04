import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8ewiSwZxf92VcknJTw7WNzbd-l3vzkwc",
  authDomain: "messager-clone-e2fcb.firebaseapp.com",
  projectId: "messager-clone-e2fcb",
  storageBucket: "messager-clone-e2fcb.appspot.com",
  messagingSenderId: "1088567870394",
  appId: "1:1088567870394:web:fbf57eb6e50b319ad89383",
  measurementId: "G-GP751LR784",
});

const db = firebaseApp.firestore();
export default db;
