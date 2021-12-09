import { orderInfoList } from "../models/orderInfoList";
import { removeFromCart } from "./removeFromCart";
import { showTotal } from "./showTotal";

export function createCartHTML() {
  let productsCartContainer:HTMLElement = document.getElementById("cart");
  productsCartContainer.innerHTML = "";
   let cartTotal: HTMLSpanElement = document.createElement("span");
  cartTotal.innerHTML = "";
  
  for (let i = 0; i < orderInfoList.length; i++){

    if (orderInfoList.length == 0) {
      console.log("inget i varukorgen"); 
    } else {      
      console.log(orderInfoList.length);
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.className = "dogproduct";
      productsCartContainer.appendChild(dogProduct);
    
      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.className = "dogimgcontainer";
      dogProduct.appendChild(dogImageCartContainer);

      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = orderInfoList[i].product.picture;
      cartIMG.alt = orderInfoList[i].product.pictureAlt;
      dogImageCartContainer.appendChild(cartIMG);

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.className = "crossIconContainer";
      dogImageCartContainer.appendChild(cartIconContainer);
      
      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.className = "bi bi-x-circle";
      cartIconContainer.appendChild(cartIcon);
      
      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = orderInfoList[i].product.name;
      dogProduct.appendChild(dogCartName);

      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.className = "dogprice";
      cartDogPrice.innerHTML = "$" + orderInfoList[i].product.price;
      dogProduct.appendChild(cartDogPrice);

      cartIcon.addEventListener("click", () => {
        removeFromCart(i);
      });
    }

  }
  let categoryCartContainer = document.getElementById("cart");
  cartTotal.innerHTML = "Totalt:";
  categoryCartContainer.appendChild(cartTotal);
  cartTotal.classList.add("cartTotal");

  let totalSum: HTMLSpanElement = document.createElement("span");
  totalSum.id = "cartTotal";
  totalSum.classList.add("addSum");

  cartTotal.appendChild(totalSum);

  let doneCartButton: HTMLButtonElement = document.createElement("button");
  doneCartButton.classList.add("checkoutBtn");
  doneCartButton.type = "sumbit";
  doneCartButton.innerHTML = "Gå vidare till betalning";

  categoryCartContainer.appendChild(doneCartButton);

  showTotal();
  }

