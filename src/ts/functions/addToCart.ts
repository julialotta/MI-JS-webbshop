import { Orderinfo } from "../models/Orderinfo";
import { orderInfoList } from "../models/orderInfoList";
import { productList } from "../models/productList";
import { updateCartLocalStorage } from "./updateCartLocalStorage";

export function addToCart(i: number) {
    let newCart = productList[i];
    let cart1 = new Orderinfo (newCart, "", "","","","",0,0,0);
    orderInfoList.push(cart1);
    let p = document.getElementById("floatingcartnumber");
  p.innerHTML = orderInfoList.length;
    updateCartLocalStorage();
}
