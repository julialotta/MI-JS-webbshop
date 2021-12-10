import { removeFromCart } from "./removeFromCart";
import { showTotal } from "./showTotal";
import { minusDogs } from "./changeTotal";
import { orderInfoList } from "../models/orderInfoList";

export function createCartHTML() {

  let productsCartContainer:HTMLElement = document.getElementById("cart");
  productsCartContainer.innerHTML = "";
  let heading = document.createElement("h3");
  heading.innerHTML = "Dina varor";
  productsCartContainer.appendChild(heading);
  let productDiv = document.createElement("div");
  productDiv.className = "cartContainer";
  productsCartContainer.appendChild(productDiv);
   let cartTotal: HTMLSpanElement = document.createElement("span");
  cartTotal.innerHTML = "";
  
  for (let i = 0; i < orderInfoList.length; i++){

    if (orderInfoList.length == 0) {
      console.log("inget i varukorgen"); 
    } else {      
       console.log(orderInfoList.length);
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.className = "dogproduct";
      productDiv.appendChild(dogProduct);
    
      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.className = "dogimgcontainer";
      dogProduct.appendChild(dogImageCartContainer);
      

      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = orderInfoList[i].product.picture;
      cartIMG.alt = orderInfoList[i].product.pictureAlt;
      dogImageCartContainer.appendChild(cartIMG);

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.classList.add("crossIconContainer");
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

      let totalOfDogs: HTMLSpanElement = document.createElement("p");
      totalOfDogs.classList.add("cartTotalDogs");
      totalOfDogs.innerHTML = "Antal: ";
      dogProduct.appendChild(totalOfDogs);

      let dogsShowTotal: HTMLSpanElement = document.createElement("p");
      dogsShowTotal.id ="totalOfDogs";
      let quantity: number = orderInfoList[i].quantity;
      dogsShowTotal.innerHTML =  quantity.toString();

      totalOfDogs.appendChild(dogsShowTotal);

      let removeADogButton: HTMLElement = document.createElement("i");
      removeADogButton.className = "bi bi-dash-circle hover";
      totalOfDogs.appendChild(removeADogButton);

      let addADogButton: HTMLElement = document.createElement("i");
      addADogButton.className = "bi bi-plus-circle hover";
      totalOfDogs.appendChild(addADogButton);

      removeADogButton.addEventListener("click", () => {
        minusDogs();
      });      

      cartIcon.addEventListener("click", () => {
        removeFromCart(i);
      });
    }


  }
  let categoryCartContainer = document.getElementById("cart");
  cartTotal.innerHTML = "Totalt: ";
  categoryCartContainer.appendChild(cartTotal);

  cartTotal.classList.add("cartTotal");

  let totalSum: HTMLSpanElement = document.createElement("span");
  totalSum.id = "cartTotal";
  totalSum.classList.add("addSum");

  cartTotal.appendChild(totalSum);

  let doneCartButton: HTMLAnchorElement = document.createElement("a");
  doneCartButton.classList.add("checkoutBtn");
  doneCartButton.href = "http://localhost:54116/checkout.html";
  doneCartButton.innerHTML = "Gå vidare till betalning";

  categoryCartContainer.appendChild(doneCartButton);

  showTotal();
}

