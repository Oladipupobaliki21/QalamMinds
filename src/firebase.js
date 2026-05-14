import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi7arvtKTrLr89CSOFPErEHffWshfPQ9Q",
  authDomain: "qalamminds-9a27f.firebaseapp.com",
  projectId: "qalamminds-9a27f",
  storageBucket: "qalamminds-9a27f.firebasestorage.app",
  messagingSenderId: "225166270757",
  appId: "225166270757:web:0372506500396a005b7acc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);