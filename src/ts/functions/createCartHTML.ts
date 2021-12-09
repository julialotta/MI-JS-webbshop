import { openProductSpec } from "./openProductSpec";
import { updateLocalStorage } from "./updateLocalStorage";
import { productList } from "../models/productList";
//import { changeTotal } from "./changeTotal";
import { removeFromCart } from "./removeFromCart";
import { showTotal } from "./showTotal";
import { minusDogs } from "./changeTotal";
export function createCartHTML() {
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].cart === true) {
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.classList.add("dogproduct");
      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.classList.add("dogimgcontainer");
      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = productList[i].picture;
      cartIMG.alt = productList[i].pictureAlt;

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.classList.add("crossIconContainer");
      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.classList.add("fas");
      cartIcon.classList.add("fa-times");
      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = productList[i].name;
      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.classList.add("dogprice");
      cartDogPrice.innerHTML = "$" + productList[i].price;

      let totalOfDogs: HTMLSpanElement = document.createElement("span");
      totalOfDogs.classList.add("cartTotalDogs");
      totalOfDogs.innerHTML = "Hundar: ";

      let dogsShowTotal: HTMLSpanElement = document.createElement("span");
      dogsShowTotal.classList.add("totalOfDogs");
      dogsShowTotal.innerHTML = productList[i].amount;
      console.log(productList[i].amount);
      console.log(productList[i].price);

      let removeADogButton: HTMLElement = document.createElement("i");
      removeADogButton.classList.add("fas");
      removeADogButton.classList.add("fa-minus");

      let addADogButton: HTMLElement = document.createElement("i");
      addADogButton.classList.add("fas");
      addADogButton.classList.add("fa-plus");

      removeADogButton.addEventListener("click", () => {
        minusDogs();
      });

      totalOfDogs.appendChild(removeADogButton);
      totalOfDogs.appendChild(dogsShowTotal);
      totalOfDogs.appendChild(addADogButton);

      dogProduct.appendChild(dogImageCartContainer);
      dogImageCartContainer.appendChild(cartIMG);
      dogImageCartContainer.appendChild(cartIconContainer);
      cartIconContainer.appendChild(cartIcon);
      dogProduct.appendChild(dogCartName);
      dogProduct.appendChild(cartDogPrice);
      dogProduct.appendChild(totalOfDogs);

      let productsCartContainer =
        document.getElementsByClassName("cartContainer")[0];

      productsCartContainer.appendChild(dogProduct);

      cartIcon.addEventListener("click", () => {
        removeFromCart(i);
      });
    }
  }

  let cartTotal: HTMLSpanElement = document.createElement("span");
  cartTotal.innerHTML = "Totalt: ";
  cartTotal.classList.add("cartTotal");

  let totalSum: HTMLSpanElement = document.createElement("span");
  totalSum.id = "cartTotal";
  totalSum.classList.add("addSum");

  cartTotal.appendChild(totalSum);

  let doneCartButton: HTMLButtonElement = document.createElement("button");
  doneCartButton.classList.add("checkoutBtn");
  doneCartButton.type = "submit";
  doneCartButton.innerHTML = "Gå vidare till betalning";

  let categoryCartContainer = document.getElementsByClassName("category")[0];
  categoryCartContainer.appendChild(cartTotal);
  categoryCartContainer.appendChild(doneCartButton);

  showTotal();
  //changeTotal();
}
