import { updateTotal } from "./updateTotal";

export function deleteItem() {
  let deleteButton = document.getElementsByClassName("fa-times");
  for (let i = 0; i < deleteButton.length; i++) {
    let button = deleteButton[i];
    button.addEventListener("click", () => {
      button.parentElement.parentElement.parentElement.remove();
    });
  }
  updateTotal();
}
