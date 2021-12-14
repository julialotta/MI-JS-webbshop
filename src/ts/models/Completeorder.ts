import { Cart } from "./Cart";

export class CompleteOrder {
  name: string;
  email: string;
  adress: string;
  city: string;
  cardName:string;
  cardNumber: number;
  expDate: number;
  cvv: number;
  orderNr: number;
  order: Cart[];

  constructor(
 

  ) {
    this.name = this.name;
    this.email = this.email;
    this.adress = this.adress;
    this.city =this.city;
    this.cardName = this.cardName;
    this.cardNumber = this.cardNumber;
    this.expDate = this.expDate;
    this.cvv = this.cvv;
    this.orderNr = this.orderNr;
    this.order = JSON.parse(localStorage.getItem("savedCartList")) || [];
  }
  }
export let completeOrderList =
  JSON.parse(sessionStorage.getItem("CompleteOrderList")) || [];
