import { productList } from "../models/objects";

export function showTotal() {
  let sum = 0;
  for (let i = 0; i < productList.length; i++) {
    let price = productList[i].price;
    sum += price;
    console.log(sum);
  }
  let totalSum = document.getElementsByClassName("addSum")[0];
  totalSum.innerHTML = "$" + sum;
}
