import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAxzEk6fj9QWhduWFEhQYw-vRkUAvc2DU",
    authDomain: "wellscheduled-b62a9.firebaseapp.com",
    projectId: "wellscheduled-b62a9",
    storageBucket: "wellscheduled-b62a9.firebasestorage.app",
    messagingSenderId: "1085696877146",
    appId: "1:1085696877146:web:9e2db0522d3291b4f62e63",
    measurementId: "G-13RDTGQ7RD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
