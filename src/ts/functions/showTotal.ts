import { orderInfoList } from "../models/orderInfoList";

export function showTotal() {
  let sum = 0;
  for (let i = 0; i < orderInfoList.length; i++) {
      let price = orderInfoList[i].product.price;
      sum += price;  
  }
  let totalSum = document.getElementsByClassName("addSum")[0];
  totalSum.innerHTML = "$" + sum;
}
