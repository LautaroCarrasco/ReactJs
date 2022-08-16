import { getProductById } from "../../api/asyncMock"

const ButtonAddCart = (id, counter)=>{
    console.log(id)
    let productAddCart = getProductById(parseInt(id))
    console.log(productAddCart)
    localStorage.setItem("productToBuy", String(productAddCart))
    console.log("Añadir producto al local storage")
}

export default ButtonAddCart;