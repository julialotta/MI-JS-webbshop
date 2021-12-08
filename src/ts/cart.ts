/* import { funktionensNamn } from "./functions/funktionensNamn";
 */
import { burgerMenu } from "./functions/burgerMenu";
import { showTotal } from "./functions/showTotal";
import { removeFromCart } from "./functions/removeFromCart";
import { createCartHTML } from "./functions/createCartHTML";

window.onload = () => {
  burgerMenu();
  showTotal();
  createCartHTML();
  /* funktionensNamn () */
};
