import { inCart } from "../models/cartList";
import { removeFromCart } from "./removeFromCart";
import { showTotal } from "./showTotal";

export function createCartHTML() {
  for (let i = 0; i < inCart.length; i++){
    if (inCart === undefined || inCart.length == 0) {
      console.log("inget i varukorgen"); 
    } else {

      console.log(inCart.length);
      let productsCartContainer = document.getElementById("cart");
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.className = "dogproduct";
      productsCartContainer.appendChild(dogProduct);
    
      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.className = "dogimgcontainer";
      dogProduct.appendChild(dogImageCartContainer);

      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = inCart[i].product.picture;
      cartIMG.alt = inCart[i].product.pictureAlt;
      dogImageCartContainer.appendChild(cartIMG);

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.className = "crossIconContainer";
      dogImageCartContainer.appendChild(cartIconContainer);
      
      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.classList.add("fas", "fa-times");
      cartIconContainer.appendChild(cartIcon);
      
      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = inCart[i].product.name;
      dogProduct.appendChild(dogCartName);

      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.className ="dogprice";
      cartDogPrice.innerHTML = "$" + inCart[i].product.price;
      dogProduct.appendChild(cartDogPrice);

      cartIcon.addEventListener("click", () => {
        removeFromCart(i);
      });
    }
  }
/* 
  let cartTotal: HTMLSpanElement = document.createElement("span");
  cartTotal.innerHTML = "Totalt:";
  cartTotal.classList.add("cartTotal");

  let totalSum: HTMLSpanElement = document.createElement("span");
  totalSum.id = "cartTotal";
  totalSum.classList.add("addSum");

  cartTotal.appendChild(totalSum);

  let doneCartButton: HTMLButtonElement = document.createElement("button");
  doneCartButton.classList.add("checkoutBtn");
  doneCartButton.type = "sumbit";
  doneCartButton.innerHTML = "Gå vidare till betalning";

  let categoryCartContainer = document.getElementsByClassName("category")[0];
  categoryCartContainer.appendChild(cartTotal);
  categoryCartContainer.appendChild(doneCartButton);

  showTotal(); */
  }

