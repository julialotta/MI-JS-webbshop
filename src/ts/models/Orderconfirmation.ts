import { CompleteOrder } from "./Completeorder";

export class Orderconfirmation {
  orderList:CompleteOrder[];

  constructor() {
    this.orderList = JSON.parse(sessionStorage.getItem("orderConfirmationList")) || [];
  }

}



export let orderList = JSON.parse(sessionStorage.getItem("orderConfirmationList")) || [];
