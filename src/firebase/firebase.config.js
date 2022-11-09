// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
    apiKey: "AIzaSyAEy4UlqqLNjzF8rjkhP6hIzoDMo0P20Ho",
    authDomain: "food-melodies.firebaseapp.com",
    projectId: "food-melodies",
    storageBucket: "food-melodies.appspot.com",
    messagingSenderId: "684267064430",
    appId: "1:684267064430:web:814a2546cefcb2dfe6aa7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;