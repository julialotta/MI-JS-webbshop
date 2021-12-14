import {
  completeOrder,
  openForm,
  hideForm,
} from "./functions/checkoutFunction";
import { burgerMenu } from "./functions/burgerMenu";
import { createCartHTML } from "./functions/createCartHtml";
import { Cart } from "./models/Cart";

window.onload = () => {
  // let callFunction = new Cart();
  hideForm();
  openForm();
  createCartHTML();
  burgerMenu();

  //  callFunction.showTotal();
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", completeOrder);

  //let ShowTotalOnCheckout: HTMLSpanElement = document.getElementById("totalSum") as HTMLSpanElement;
};
