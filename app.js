import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const userCountEl = document.getElementById("userCount");

async function loadUsers() {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    userCountEl.innerText = snapshot.size;
  } catch (error) {
    console.error(error);
    userCountEl.innerText = "Error loading data";
  }
}

loadUsers();