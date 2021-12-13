import {
  completeOrder,
  openForm,
  hideForm,
  orderNumber,
} from "./functions/checkoutFunction";
import { burgerMenu } from "./functions/burgerMenu";
import { createCartHTML } from "./functions/createCartHtml";

window.onload = () => {
  hideForm();
  openForm();
  createCartHTML();
  burgerMenu();
  orderNumber();
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", completeOrder);
};
