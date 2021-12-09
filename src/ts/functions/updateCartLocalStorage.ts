import { inCart } from "../models/cartList";
import { productList } from "../models/productList";
import { createCartHTML } from "./createCartHTML";

export function updateCartLocalStorage () {
    let listastext = JSON.stringify(inCart);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML ();
}

