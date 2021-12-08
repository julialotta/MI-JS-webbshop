import { openProductSpec } from "./openProductSpec";
import { updateLocalStorage } from "./updateLocalStorage";
import { productList } from "../models/productList";
import { Products } from "../models/Products";
import { removeFromCart } from "./removeFromCart";

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

      dogProduct.appendChild(dogImageCartContainer);
      dogImageCartContainer.appendChild(cartIMG);
      dogImageCartContainer.appendChild(cartIconContainer);
      cartIconContainer.appendChild(cartIcon);
      dogProduct.appendChild(dogCartName);
      dogProduct.appendChild(cartDogPrice);

      let productsCartContainer =
        document.getElementsByClassName("cartContainer")[0];

      productsCartContainer.appendChild(dogProduct);

      cartIcon.addEventListener("click", () => {
        removeFromCart(i);
      });
    }
  }
}
