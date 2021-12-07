//import { Products } from "../models/Products";

export function updateTotal() {
  let cartContainer = document.getElementsByClassName("cartContainer")[0];
  let cartProducts = cartContainer.getElementsByClassName("dogproduct");
  for (let i = 0; i < cartProducts.length; i++) {
    let cartItem = cartProducts[i];
    let priceElement = cartItem.getElementsByClassName("dogPrice")[0];
    let prices = priceElement[i] as HTMLElement;
    let QTYInput = cartItem.getElementsByClassName("cartQTYInput")[0];
    let price = prices.innerText;
    console.log(prices);
  }
}
