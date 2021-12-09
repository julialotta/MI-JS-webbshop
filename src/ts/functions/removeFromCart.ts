import { inCart } from "../models/cartList";
import { updateCartLocalStorage } from "./updateCartLocalStorage";


export function removeFromCart(i: number) {
    inCart.splice(i,1);
    updateCartLocalStorage();
    }


/*export function deleteItem() {
  let deleteButton = document.getElementsByClassName("fa-times");
  for (let i = 0; i < deleteButton.length; i++) {
    let button = deleteButton[i];
    button.addEventListener("click", () => {
      button.parentElement.parentElement.parentElement.remove();
    });
  }
}*/
