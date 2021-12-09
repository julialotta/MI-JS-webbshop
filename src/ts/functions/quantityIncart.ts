import { inCart } from "../models/cartList";
import { updateProductLocalStorage } from "./updateProductLocalStorage";

export function quantityIncart() {
   let p = document.getElementById("floatingcartnumber");
    p.innerHTML = inCart.length;
    updateProductLocalStorage ();
}


