import { createCartHTML } from "../functions/createCartHTML";
import { Orderinfo } from "./Orderinfo";
import { productList } from "./productList";

export class Cart {
    cartList: Orderinfo[];

    constructor(){
        this.cartList = JSON.parse(localStorage.getItem("savedCartList")) || [];
    }

    addToCart(i:number) {
    let newCart = productList[i];
    let cart1 = new Orderinfo (newCart,1);
    this.cartList.push(cart1);
    let p = document.getElementById("floatingcartnumber");
    p.innerHTML = this.cartList.length.toString();

    let listastext = JSON.stringify(this.cartList);
    localStorage.setItem("savedCartList", listastext);
    }

    removeFromCart(i: number) {
    this.cartList.splice(i,1);
    let listastext = JSON.stringify(this.cartList);
    localStorage.setItem("savedCartList", listastext);
    createCartHTML();
    }

}

export let orderInfoList = JSON.parse(localStorage.getItem("savedCartList")) || [];