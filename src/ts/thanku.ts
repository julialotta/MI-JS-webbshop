import { burgerMenu } from "./functions/burgerMenu";

//import { orderSummary } from "./functions/checkoutFunction";
import { createThankuHTML } from "./functions/createThankuHTML";

window.onload = () => {
  burgerMenu();
  createThankuHTML();
};
