/* import { funktionensNamn } from "./functions/funktionensNamn";
 */
import { burgerMenu } from "./functions/burgerMenu";
import { deleteItem } from "./functions/deleteItem";
import { updateTotal } from "./functions/updateTotal";

window.onload = () => {
  burgerMenu();
  deleteItem();
  updateTotal();
  /* funktionensNamn () */
};
