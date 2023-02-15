import { ref, child, get } from "firebase/database";
import { realtimeDB } from "./config"

const getAllProducts = async () => {

  let data
  let isError = false

      let getAllProductsRef = ref( realtimeDB );
      await get(child(getAllProductsRef, `cellkart/products`)).then((snapshot) => {
        if ( snapshot.exists()) {
          data = snapshot.val()
        } else {
          data = false
        }
      }).catch((error) => {
        isError = true
        data = error
      });

      console.log(data)

  return [data, isError]
  
  
}

export default getAllProducts