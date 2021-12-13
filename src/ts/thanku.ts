import { burgerMenu } from "./functions/burgerMenu";

import { orderNumber } from "./functions/checkoutFunction";
import { createThankYouHtml } from "./functions/createThankYouHtml";

import { orderSummary } from "./functions/checkoutFunction";


window.onload = () => {
 orderSummary();
  burgerMenu();
  createThankYouHtml();
  orderNumber();
};

   
   




