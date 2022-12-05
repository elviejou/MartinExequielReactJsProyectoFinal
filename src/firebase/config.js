// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIr3mEy3n3HFYE4EBl42muuhnrjjZWr3Y",
  authDomain: "martinexequielcoderreactjs.firebaseapp.com",
  projectId: "martinexequielcoderreactjs",
  storageBucket: "martinexequielcoderreactjs.appspot.com",
  messagingSenderId: "540023330916",
  appId: "1:540023330916:web:131e2089ec692a5c412771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const iniciarFirestore = () => app
  