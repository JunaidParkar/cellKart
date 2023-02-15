import { ref, child, get } from "firebase/database";
import { realtimeDB } from "../config";


const loginUser = async (props) => {
    let dbRef = ref(realtimeDB);
    let result
    await get(child(dbRef, `cellkart/admin`)).then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().username == props.username && snapshot.val().password == props.password){
            localStorage.setItem("credU", snapshot.val().username)
            localStorage.setItem("credP", snapshot.val().password)
            result = true
        } else {
            alert("Credentials mis-matched")
            localStorage.clear()
            result = false
        }
      } else {
        localStorage.clear()
        result = false
      }
    }).catch((error) => {
        localStorage.clear()
      result = false
    });
    return result
}

export const checkAdminLogin = async () => {
    let result
    let dbRef = ref(realtimeDB);
    if (localStorage.hasOwnProperty("credU") && localStorage.hasOwnProperty("credP")) {
        await get(child(dbRef, `cellkart/admin`)).then((snapshot) => {
            if (snapshot.exists()) {
              if (!(snapshot.val().username == localStorage.getItem("credU") && snapshot.val().password == localStorage.getItem("credP"))){
                  result = false
                  localStorage.clear()
              } else {
                  result = true
              }
            } else {
              localStorage.clear()
              result = false
            }
        }).catch((error) => {
            localStorage.clear()
            result = false
        });
    } else {
        result = false
    }
    return result
}

export default loginUser
// export checkAdminLogin