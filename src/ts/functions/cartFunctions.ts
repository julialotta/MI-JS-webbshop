import { productList } from "../models/productList";
import { orderInfoList } from "../models/orderInfoList";
import { createCartHTML } from "./createCartHtml";
import { Orderinfo } from "../models/Orderinfo";

export function updateCartLocalStorage() {
  console.log("hej");

  let listastext = JSON.stringify(orderInfoList);
  localStorage.setItem("savedCartList", listastext);
  createCartHTML();
}
export function minusDogs(i: number) {
  if (orderInfoList[i].quantity == !orderInfoList[i].quantity) {
    orderInfoList[i].quantity--;
    console.log(orderInfoList[i].quantity);
    updateCartLocalStorage();
  }
  if (orderInfoList[i].quantity == 1) {
    removeFromCart(i);
    updateCartLocalStorage();
  } else {
    orderInfoList[i].quantity--;
    updateCartLocalStorage();
  }
}

export function plusDogs(i: number) {
  if (orderInfoList[i].quantity === orderInfoList[i].quantity) {
    orderInfoList[i].quantity++;
    updateCartLocalStorage();
  }
}

export function noItems() {
  if (orderInfoList.length === 0) {
    let noItemsContainer: HTMLElement = document.getElementById("cart");
    let textContainer: HTMLDivElement = document.createElement("div");
    textContainer.classList.add("emptyCartContainer");

    let noItemsSpan: HTMLElement = document.createElement("h3");
    noItemsSpan.innerHTML = "Din varukorg är tom";
    noItemsSpan.classList.add("emptyCart");

    textContainer.appendChild(noItemsSpan);
    noItemsContainer.appendChild(textContainer);
  }
}

export function openThanku() {
  location.href = "checkout.html";
}

export function showTotal() {
  let sum = 0;
  for (let i = 0; i < orderInfoList.length; i++) {
    let price = orderInfoList[i].product.price * orderInfoList[i].quantity;
    sum += price;
  }
  let totalSum = document.getElementsByClassName("addSum")[0];
  totalSum.innerHTML = "$" + sum;
}
export function removeFromCart(i: number) {
  orderInfoList.splice(i, 1);
  updateCartLocalStorage();
}

export function addToCart(i: number) {
  let newCart = productList[i];
  let cart1 = new Orderinfo(newCart, 1);
  orderInfoList.push(cart1);
  let p = document.getElementById("floatingcartnumber");
  p.innerHTML = orderInfoList.length;
  updateCartLocalStorage();
}
