import { productList } from "../models/productList";
import { createCartHTML } from "./createCartHtml";
import { createProductSpec } from "./createProductSpec";

export function updateSpecLocalStorage () {
    let listastext = JSON.stringify(productList);
    localStorage.setItem("savedList", listastext);
    createCartHTML ();
}

