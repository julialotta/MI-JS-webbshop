import { productList } from "../models/productList";
import { updateLocalStorage } from "./updateLocalStorage";

export function removeProductSpec () {
    for (let i = 0; i < productList.length; i++) {
    if (productList[i].productSpec === true) {
        window.location.href = "product-page.html#" + productList[i].category +"target";
    }
    }
}