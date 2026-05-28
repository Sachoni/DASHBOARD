// script.js

// FIREBASE IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// YOUR FIREBASE CONFIG
// REPLACE WITH YOUR OWN CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCe6zcYlkBlgcOllDlTreozApj24fQIdZY",
  authDomain: "batter-53f91.firebaseapp.com",
  projectId: "batter-53f91",
  storageBucket: "batter-53f91.firebasestorage.app",
  messagingSenderId: "825703034072",
  appId: "1:825703034072:web:a416764346918e6da3bbad"
};


// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// CHECK CONNECTION
document.getElementById("status").innerText = "Connected";


// LOAD TOTAL USERS
async function loadUsersCount() {

  try {

    const querySnapshot = await getDocs(
      collection(db, "users")
    );

    document.getElementById("users-count").innerText =
      querySnapshot.size;

  } catch (error) {

    console.error(error);

    document.getElementById("status").innerText =
      "Connection Failed";
  }
}

loadUsersCount();

// createSampleUsers();