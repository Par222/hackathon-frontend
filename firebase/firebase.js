// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7fXquwY8jBPc0xsKTeVgLIeQ3Wg3jfsQ",
  authDomain: "hackathon-df3eb.firebaseapp.com",
  projectId: "hackathon-df3eb",
  storageBucket: "hackathon-df3eb.appspot.com",
  messagingSenderId: "513671591236",
  appId: "1:513671591236:web:e7499375d9a262b6511311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);