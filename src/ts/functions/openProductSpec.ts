import { productList } from "../models/productList";
import { updateLocalStorage } from "./updateLocalStorage";

export function openProductSpec (i: number) {
    productList[i].productSpec = !productList[i].productSpec;
    updateLocalStorage ();
    window.location.href = "product-spec.html#backArrow";
}
