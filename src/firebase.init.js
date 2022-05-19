// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNF80yG37eNM84x0kgVA5ebIYY5FzBsnQ",
  authDomain: "todo-app-a1965.firebaseapp.com",
  projectId: "todo-app-a1965",
  storageBucket: "todo-app-a1965.appspot.com",
  messagingSenderId: "124482534034",
  appId: "1:124482534034:web:ee96d6ad3ea7e18438444b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;