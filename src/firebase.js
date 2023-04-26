// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLdo2E_t9bcgED9YIpp7kr3BwAGErQFn0",
  authDomain: "realtor-clone-react-44581.firebaseapp.com",
  projectId: "realtor-clone-react-44581",
  storageBucket: "realtor-clone-react-44581.appspot.com",
  messagingSenderId: "348301804767",
  appId: "1:348301804767:web:57b38a951e2693a026956a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
