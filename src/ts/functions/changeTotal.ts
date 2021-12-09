import { productList } from "../models/productList";
import { removeFromCart } from "./removeFromCart";
import { updateLocalStorage } from "./updateLocalStorage";

let listOfDogs: number = 1;

/*export function changeTotal() {
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].cart === true) {
      let totalDogs = document.getElementsByClassName("totalOfDogs");
      for (let i = 0; i < totalDogs.length; i++) {
        let totalD = totalDogs[i] as HTMLElement;
        totalD.innerHTML = "" + listOfDogs;
      }
    }
  }
}*/

export function minusDogs() {
  console.log("klickad");
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].amount === 1) {
      productList[i].amount === productList[i].amount - 1;
    }
  }
}

/*for (let i = 0; i < productList.length; i++) {
    if (productList[i].cart === true) {
      listOfDogs.push(productList[i]);
      console.log(listOfDogs);
      let listLength = listOfDogs.length;
      console.log(listLength);
      let totalDogs = document.getElementsByClassName("totalOfDogs");
      for (let i = 0; i < totalDogs.length; i++) {
        let totalD = totalDogs[i] as HTMLElement;
        totalD.innerHTML = "" + listLength;
      }
    }
  }*/
