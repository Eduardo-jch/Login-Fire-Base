import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBYV-T8fJMnUXqGr06Z88woKsnlVQ0Ssis",
    authDomain: "fir-login-378b9.firebaseapp.com",
    projectId: "fir-login-378b9",
    storageBucket: "fir-login-378b9.appspot.com",
    messagingSenderId: "869384499661",
    appId: "1:869384499661:web:6f4292cb68d581f5dcd484",
    measurementId: "G-WTN137NPZS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);