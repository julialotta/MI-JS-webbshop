import { burgerMenu } from "./functions/burgerMenu";
import { createProductHtml } from "./functions/createProductHtml";
import { quantityIncart } from "./functions/quantityIncart";

window.onload = () => {
  burgerMenu();
  createProductHtml();
  quantityIncart();
};
