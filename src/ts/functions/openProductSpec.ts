import { productList } from "../models/productList";
import { updateSpecLocalStorage } from "./updateLocalStorage";

export function openProductSpec (i: number) {
    productList[i].productSpec = !productList[i].productSpec;
    updateSpecLocalStorage ();
    window.location.href = "product-spec.html#backArrow";
}
