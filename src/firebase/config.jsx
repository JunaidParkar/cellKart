import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCsVftsDmNnUAxoF2rer3NexNffkPBUnfg",
  authDomain: "cellkart-904ec.firebaseapp.com",
  projectId: "cellkart-904ec",
  storageBucket: "cellkart-904ec.appspot.com",
  messagingSenderId: "261581751620",
  appId: "1:261581751620:web:4876ee3f999a7675eb8311",
  measurementId: "G-6J202S71J4",
  databaseURL: "https://cellkart-904ec-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// export const storageRef = ref(storage, 'products')
export const realtimeDB = getDatabase(app);
export const analytics = getAnalytics(app);