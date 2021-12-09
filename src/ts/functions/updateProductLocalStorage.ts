import { productList } from "../models/productList";
import { createProductHtml } from "./createProductHtml";

export function updateProductLocalStorage() {
    let listastext = JSON.stringify(productList);
    localStorage.setItem("savedList", listastext);
    createProductHtml ();
}