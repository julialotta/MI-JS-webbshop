import { Cart } from "./Cart";

export class CustomerInfo {
    name: string;
    email: string;
    adress: string;
    city: string;
    cardHolderName: string;
    cardNumber: number;
    expireDate: number;
    cvv: number;
    cart: Cart;


        constructor(
            name: string,
            email: string,
            adress: string,
            city: string,
            cardHolderName: string,
            cardNumber: number,
            expireDate: number,
            cvv: number,
            cart: Cart,
        )
        
        {  
            this.name = name;
            this.email = email;
            this.city = city;
            this.cardHolderName = cardHolderName;
            this.cardNumber = cardNumber;
            this.expireDate = expireDate;
            this.cvv = cvv;
            this.cart = cart;
     }};
