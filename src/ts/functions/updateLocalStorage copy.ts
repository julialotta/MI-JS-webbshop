import { productList } from "../models/productList";
import { createCartHTML } from "./createCartHTML";
import { createProductSpec } from "./createProductSpec";

export function updateLocalStorage () {
    let listastext = JSON.stringify(productList);
    localStorage.setItem("savedList", listastext);
    createCartHTML ();
}

