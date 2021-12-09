import { Incart } from "./Incart";
import { productList } from "./productList";

/* let customer1 = new Incart(
    productList 
    ); */

 

export let inCart = JSON.parse(localStorage.getItem("savedCartList")) || [];
