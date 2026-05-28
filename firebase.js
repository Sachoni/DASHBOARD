// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw1sqpMMBt3zxAf2NggiZsj6rhhXgnE0Y",
  authDomain: "butter-ecommerce.firebaseapp.com",
  projectId: "butter-ecommerce",
  storageBucket: "butter-ecommerce.firebasestorage.app",
  messagingSenderId: "936911351357",
  appId: "G-253N8XLHGR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);