import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFvPYU9TBsqQNvPAp6mzNSzd-T-x8c77w",
  authDomain: "labnotes-15c7b.firebaseapp.com",
  projectId: "labnotes-15c7b",
  storageBucket: "labnotes-15c7b.appspot.com",
  messagingSenderId: "182199350613",
  appId: "1:182199350613:web:d58c3ca5c8df827d452bdc",
  measurementId: "G-XCK2ZPXT50",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
