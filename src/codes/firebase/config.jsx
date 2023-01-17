import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
  measurementId: import.meta.env.VITE_REACT_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)



const checkLogin = async () => {
  const querySnapshot = await getDocs(collection(fireStore, "admin"));
  let result
  querySnapshot.forEach((doc) => {
    const username = `${doc.data().username}`
    const password = `${doc.data().password}`
    if (localStorage.length == 0) {
      result = {cred : "nav"}
    } else {
      const getData = localStorage.getItem("cred").split(".")
      const dataUsername = getData[1]
      const dataPassword = getData[3]
      if ((dataUsername.trim() == username.trim()) && (dataPassword.trim() == password.trim())) {
        result = {cred : localStorage.getItem("cred")}
      } else {
        result = {cred : false}
      }
    }
  })
  return result
}

export {app, fireStore,checkLogin}
// const analytics = getAnalytics(app);