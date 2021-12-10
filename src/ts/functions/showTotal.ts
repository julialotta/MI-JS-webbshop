import { orderInfoList } from "../models/orderInfoList";

export function showTotal() {
  let sum = 0;
  for (let i = 0; i < orderInfoList.length; i++) {
      let price = orderInfoList[i].product.price;
      sum += price;  
  }
  for (let i = 0; i < 2; i++) {
    let totalSum = document.getElementsByClassName("addSum");
  let test = totalSum[i] as HTMLElement;
  /* test.innerHTML = "$" ; */
  }

}