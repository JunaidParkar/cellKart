import { ref, child, get, set } from "firebase/database";
import { realtimeDB, storage } from "./config"
import { ref as storageRef, deleteObject, listAll } from "firebase/storage"

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


  return [data, isError]
}

export const addProductToDB = async (dataInJSON) => {
  let isError = false
  await set(ref(realtimeDB, `cellkart/products/${dataInJSON.productID}`),{
    Brand: dataInJSON.brand,
    Images: {
      Link1: dataInJSON.image1,
      Link2: dataInJSON.image2,
      Link3: dataInJSON.image3,
      Link4: dataInJSON.image4
    },
    MarketPrice: dataInJSON.marketPrice,
    MoreInfo: dataInJSON.info,
    OriginalBindingDate: dataInJSON.date,
    SellingPrice: dataInJSON.sellingPrice,
    name: dataInJSON.name,
    productID: dataInJSON.productID
  }).catch(e => {isError = e})

  let isUpdated = await getAllProducts().then(data => {
    if (data[0][dataInJSON.productID] == undefined) {
      return false
    } else {
      return true
    }
  })

  return [isUpdated, isError]
}

export const deleteData = async (id) => {
  let dataDeleted, imageDeleted
  // let refe = ref(realtimeDB, `cellkart/products/${dataInJSON.productID}`)
  await set(ref(realtimeDB, `cellkart/products/${id}`),{
    Brand: null,
    Images: {
      Link1: null,
      Link2: null,
      Link3: null,
      Link4: null
    },
    MarketPrice: null,
    MoreInfo: null,
    OriginalBindingDate: null,
    SellingPrice: null,
    name: null,
    productID: null
  }).catch(e => {alert(e)})

  dataDeleted = await getAllProducts().then(data => {
    if (data[0][id] == undefined) {
      return true
    } else {
      return false
    }
  })

  // if (dataDeleted) {
    let imgRef = storageRef(storage, `products/${id}`)
    await listAll(imgRef).then(e => {
      e.items.forEach(ee =>{
        let imgRef2 = storageRef(storage, ee.fullPath)
        deleteObject(imgRef2).then(eee => {
          imageDeleted = true
        }).catch(eeee => {
          imageDeleted = false
        })
      })
    })
  // } else { imageDeleted = false}


  return [dataDeleted, imageDeleted]
}

export default getAllProducts