/* import { funktionensNamn } from "./functions/funktionensNamn";
 */
import { burgerMenu } from "./functions/burgerMenu";
import { removeFromCart } from "./functions/removeFromCart";
import { createCartHTML } from "./functions/createCartHTML";

window.onload = () => {
  burgerMenu();
  createCartHTML();
  /* funktionensNamn () */
};
