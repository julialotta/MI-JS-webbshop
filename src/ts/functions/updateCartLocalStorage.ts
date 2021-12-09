import { inCart } from "../models/cartList";
import { productList } from "../models/productList";
import { createCartHTML } from "./createCartHTML";

export function updateCartLocalStorage () {
    console.log("hej");
    
    let listastext = JSON.stringify(inCart);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML ();
}

