import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1realS3chwCziVGkK0Mg9YIDSUGynM2E",
  authDomain: "rainbow-cf0a1.firebaseapp.com",
  projectId: "rainbow-cf0a1",
  storageBucket: "rainbow-cf0a1.appspot.com",
  messagingSenderId: "272292441451",
  appId: "1:272292441451:web:7cae6fca8a030e5e9d302e",
  measurementId: "G-3QYYXQ31HS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
