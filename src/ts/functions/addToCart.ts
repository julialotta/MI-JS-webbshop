import { productList } from "../models/productList";
import { updateLocalStorage } from "./updateLocalStorage";
export function addToCart(i: number) {
  productList[i].cart = !productList[i].cart;
  updateLocalStorage();
}
