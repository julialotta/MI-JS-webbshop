import { productList } from "../models/productList";

export function showTotal() {
  let sum = 0;
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].cart === true) {
      let price = productList[i].price;
      sum += price;
    }
  }
  let totalSum = document.getElementsByClassName("addSum")[0];
  totalSum.innerHTML = "$" + sum;
}
