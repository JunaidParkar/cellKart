import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCards from '../components/productCards'
import "../css/admin/removeProduct.css"
import { checkAdminLogin } from '../firebase/admin/loginAdmin'
import getAllProducts, { deleteData } from '../firebase/productContext'

const RemoveProduct = () => {
    
    const [productsData1, setProductsData1] = useState()
    const [showWarning, setShowWarning] = useState([false, ""])
    const [typPass, setTypPass] = useState("")

    const navigate = useNavigate()


    useEffect(() => {
        const mainFunction = async () => {
            await checkAdminLogin().then(data => {
                if (!data) {
                    navigate("/")
                }
            })
            getAllProducts().then(data => {
                setProductsData1(data)
            })
        }
        mainFunction()
        }, [])

    const getProductIDFromClicked = (id) => {
        console.log(productsData1[0][id])
        setShowWarning([true, id])
    }

    const startDelete = async (e, id) => {
        e.preventDefault()
        if (localStorage.getItem("credP") == typPass) {
            console.log("hi")
            await deleteData(id).then(e => {
                // if (!e[0]) {
                //     alert("unable to delete data now")
                // } else if (!e[1]){
                //     alert(`unable to delete images try it manually by id ${id}`)
                // } else {
                //     alert("data deleted")
                //     navigate("/codes/admin")
                // }
                navigate("/codes/admin")
            })
        } else {
            alert("wrong password")
            setShowWarning([false, ""])
        }
    }

    // const cc = async () => {
    //     await deleteData("junaid").then()
    // }

    // cc().then()


  return (
    <>
        <div className="cont">
            <div className="product-box">{
                    productsData1 !== null && productsData1 !== undefined ? 
                    Object.keys(productsData1[0]).map((key, index) => {
                        return <ProductCards key={index} keys={key} clickedID={getProductIDFromClicked} productsDatas={productsData1[0][key]} />
                    })
                    : ""
                }
            </div>
        </div>
        {showWarning[0] ? <div className="zcont">
            <form onSubmit={(e) => startDelete(e, showWarning[1])}>
                <label htmlFor="admP">Enter admin password to delete data</label>
                <input type="password" onChange={e => setTypPass(e.target.value)} name="" placeholder='Enter admin password' id="admP" />
                <input type="submit" value="Submit" />
            </form>
        </div> : ""}
    </>
  )
}

export default RemoveProduct
