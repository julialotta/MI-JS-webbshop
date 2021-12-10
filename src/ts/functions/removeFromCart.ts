import { orderInfoList } from "../models/orderInfoList";
import { updateCartLocalStorage } from "./updateLocalStorage";


export function removeFromCart(i: number) {
    orderInfoList.splice(i,1);
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
