import { inCart } from "../models/cartList";

export function showTotal() {
  let sum = 0;
  for (let i = 0; i < inCart.length; i++) {
      let price = inCart[i].product.price;
      sum += price;  
  }
  let totalSum = document.getElementsByClassName("addSum")[0];
  totalSum.innerHTML = "$" + sum;
}
