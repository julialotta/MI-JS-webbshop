import { productList } from "../models/productList";
import { createCartHTML } from "./createCartHTML";


/* export function updateCustomerLocalStorage () {
    let listastext = JSON.stringify(customerInfoList);
    localStorage.setItem("savedCustomerList", listastext);
    createCartHTML ();
} */


export function updateSpecLocalStorage () {
    let listastext = JSON.stringify(productList);
    localStorage.setItem("savedList", listastext);
    createCartHTML ();
}

