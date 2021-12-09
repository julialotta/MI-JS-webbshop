import { orderInfoList } from "../models/orderInfoList";
import { productList } from "../models/productList";
import { createCartHTML } from "./createCartHtml";

export function updateCartLocalStorage () {
    console.log("hej");
    
    let listastext = JSON.stringify(orderInfoList);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML ();
}

