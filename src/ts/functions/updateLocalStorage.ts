import { productList } from "../models/productList";
import { createProductSpec } from "./createProductSpec";

export function updateLocalStorage () {
    let listastext = JSON.stringify(productList);
    localStorage.setItem("savedList", listastext);  
    createProductSpec ();
}

