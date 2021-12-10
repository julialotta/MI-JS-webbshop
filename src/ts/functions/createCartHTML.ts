import { showTotal } from "./showTotal";
import { Cart } from "../models/Cart";

export function createCartHTML() {  
  let cart = new Cart();
  let productsCartContainer:HTMLElement = document.getElementById("cart");
  productsCartContainer.innerHTML = "";
   let categoryCartContainer = document.getElementById("cartTotal");
  categoryCartContainer.innerHTML = "";
  if (cart.cartList.length == 0 ) {
    let textContainer: HTMLDivElement = document.createElement("div");
    textContainer.classList.add("emptyCartContainer");

    let noItemsSpan: HTMLElement = document.createElement("h3");
    noItemsSpan.innerHTML = "Din varukorg är tom";
    noItemsSpan.classList.add("emptyCart");

    textContainer.appendChild(noItemsSpan);
    productsCartContainer.appendChild(textContainer);

  } else {
  
  let heading = document.createElement("h3");
  heading.innerHTML = "Dina varor";
  productsCartContainer.appendChild(heading);

  let productDiv = document.createElement("div");
  productDiv.className = "cartContainer";
  productsCartContainer.appendChild(productDiv);

  
  for (let i = 0; i < cart.cartList.length; i++){
      let dogProduct: HTMLDivElement = document.createElement("div");
      dogProduct.className = "dogproduct";
      productDiv.appendChild(dogProduct);
    
      let dogImageCartContainer: HTMLDivElement = document.createElement("div");
      dogImageCartContainer.className = "dogimgcontainer";
      dogProduct.appendChild(dogImageCartContainer);
      

      let cartIMG: HTMLImageElement = document.createElement("img");
      cartIMG.src = cart.cartList[i].product.picture
      cartIMG.alt = cart.cartList[i].product.pictureAlt;
      dogImageCartContainer.appendChild(cartIMG);

      let cartIconContainer: HTMLDivElement = document.createElement("div");
      cartIconContainer.classList.add("crossIconContainer");
      dogImageCartContainer.appendChild(cartIconContainer);

      let cartIcon: HTMLElement = document.createElement("i");
      cartIcon.className = "bi bi-x-circle";
      cartIconContainer.appendChild(cartIcon);

      let dogCartName: HTMLElement = document.createElement("h5");
      dogCartName.innerHTML = cart.cartList[i].product.name;
      dogProduct.appendChild(dogCartName);

      let cartDogPrice: HTMLElement = document.createElement("p");
      cartDogPrice.className = "dogprice";
      cartDogPrice.innerHTML = "$" + cart.cartList[i].product.price.toString();
      dogProduct.appendChild(cartDogPrice);

      let totalOfDogs: HTMLSpanElement = document.createElement("p");
      totalOfDogs.classList.add("cartTotalDogs");
      totalOfDogs.innerHTML = "Antal: ";
      dogProduct.appendChild(totalOfDogs);

      let dogsShowTotal: HTMLSpanElement = document.createElement("p");
      dogsShowTotal.id ="totalOfDogs";
      let quantity: number = cart.cartList[i].quantity;
      dogsShowTotal.innerHTML = quantity.toString();

      totalOfDogs.appendChild(dogsShowTotal);

      let removeADogButton: HTMLElement = document.createElement("i");
      removeADogButton.className = "bi bi-dash-circle hover";
      totalOfDogs.appendChild(removeADogButton);

      let addADogButton: HTMLElement = document.createElement("i");
      addADogButton.className = "bi bi-plus-circle hover";
      totalOfDogs.appendChild(addADogButton);

      removeADogButton.addEventListener("click", () => {
          if (cart.cartList[i].quantity > 1) {
          cart.cartList[i].quantity--;
          createCartHTML();
          }
            if (cart.cartList[i].quantity == 1) {
          cart.removeFromCart(i);

  }
        });

/* 
        export function minusDogs(i: number) {
  
}

export function plusDogs(i: number) {
  if (orderInfoList[i].quantity === orderInfoList[i].quantity) {
    orderInfoList[i].quantity++;
    updateCartLocalStorage();
  }
}

export function noItems() {
  if (orderInfoList.length === 0) {
    let noItemsContainer: HTMLElement = document.getElementById("cart");
    let textContainer: HTMLDivElement = document.createElement("div");
    textContainer.classList.add("emptyCartContainer");

    let noItemsSpan: HTMLElement = document.createElement("h3");
    noItemsSpan.innerHTML = "Din varukorg är tom";
    noItemsSpan.classList.add("emptyCart");

    textContainer.appendChild(noItemsSpan);
    noItemsContainer.appendChild(textContainer);
  }
} */
      
      cartIcon.addEventListener("click", () => {
        cart.removeFromCart(i); });

      }
  let cartTotal: HTMLSpanElement = document.createElement("span");
  cartTotal.innerHTML = "";
  cartTotal.innerHTML = "Totalt: ";
  categoryCartContainer.appendChild(cartTotal);

  cartTotal.classList.add("cartTotal");

  let totalSum: HTMLSpanElement = document.createElement("span");
  totalSum.id = "cartTotal";
  totalSum.classList.add("addSum");

  cartTotal.appendChild(totalSum);

  let doneCartButton: HTMLAnchorElement = document.createElement("a");
  doneCartButton.classList.add("checkoutBtn");
  doneCartButton.href = "/checkout.html";
  doneCartButton.innerHTML = "Gå vidare till betalning";

  categoryCartContainer.appendChild(doneCartButton);

  showTotal();
}
  
}