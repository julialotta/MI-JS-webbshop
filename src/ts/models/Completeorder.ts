import { Cart } from "./Cart";

export class CompleteOrder {
  name: string;
  email: string;
  adress: string;
  city: string;
  cardName:string;
  carNumber: number;
  expDate: number;
  cvv: number;
  order: Cart[];

  constructor() {
    this.name = this.name;
    this.email = this.email;
    this.adress = this.adress;
    this.city =this.city;
    this.cardName = this.cardName;
    this.carNumber = this.carNumber;
    this.expDate = this.expDate;
    this.cvv = this.cvv;
    this.order = JSON.parse(localStorage.getItem("completedOrderList")) || [];

  }

 /*  myFunctiom() {
  } */

  
  }


export let completeOrderList =
  JSON.parse(localStorage.getItem("CompleteOrderList")) || [];
