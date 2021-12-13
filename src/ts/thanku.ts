import { burgerMenu } from "./functions/burgerMenu";
import { orderNumber } from "./functions/checkoutFunction";
import { createThankYouHtml } from "./functions/createThankYouHtml";

window.onload = () => {
  burgerMenu();
  createThankYouHtml();
  orderNumber();
};
