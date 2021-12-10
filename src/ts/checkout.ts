import { openForm } from "./functions/checkoutFunction";
import { hideForm } from "./functions/checkoutFunction";
import { burgerMenu } from "./functions/burgerMenu";
import { createCartHTML } from "./functions/createCartHtml";
import { customerInfo } from "./functions/checkoutFunction";


window.onload = () => {
hideForm();
openForm();
createCartHTML();
burgerMenu();
};
