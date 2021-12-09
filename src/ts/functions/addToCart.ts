import { inCart } from "../models/cartList";
import { Incart } from "../models/Incart";
import { productList } from "../models/productList";
import { updateCartLocalStorage } from "./updateCartLocalStorage";

export function addToCart(i: number) {
    let newCart = productList[i];
    let cart1 = new Incart (newCart);
    inCart.push(cart1);
    updateCartLocalStorage();
}
