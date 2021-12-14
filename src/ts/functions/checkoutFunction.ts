import { cartList } from "../models/Cart";
import { CompleteOrder } from "../models/Completeorder";
import { Orderconfirmation, orderList } from "../models/Orderconfirmation";

export function hideForm() {
  let bothforms = document.getElementsByClassName("forms");
  for (let i = 0; i < bothforms.length; i++) {
    let hideForms = bothforms[i] as HTMLElement;
    hideForms.style.display = "none";
  }
}

export function openForm() {
  let formsDisplayButton = document.getElementsByClassName("closeOpenForm");

  for (let i = 0; i < formsDisplayButton.length; i++) {
    let formHeading = formsDisplayButton[i] as HTMLElement;
    formHeading.style.cursor = "pointer";
    formHeading.addEventListener("click", () => {
      let forms = document.getElementsByClassName("forms");
      let theForms = forms[i] as HTMLElement;

      let openArrow = document.getElementsByClassName("openAndClose");
      let arrowAndX = openArrow[i] as HTMLElement;

      if (window.getComputedStyle(theForms).display === "none") {
        theForms.style.display = "";

        arrowAndX.classList.remove("bi-chevron-compact-down");

        arrowAndX.classList.add("bi-x-lg");
      } else {
        theForms.style.display = "none";
        arrowAndX.classList.remove("bi-x-lg");
        arrowAndX.classList.add("bi-chevron-compact-down");
      }
    });
  }
}


export function completeOrder() {
  let customer= new CompleteOrder();


let nameInput:HTMLInputElement = document.getElementById("name") as HTMLInputElement;
let cName = nameInput.value;
customer.name = cName;
  
  let emailInput: HTMLInputElement = document.getElementById(
    "email"
  ) as HTMLInputElement;
  let email = emailInput.value;
  customer.email = email;

let adressInput: HTMLInputElement = document.getElementById(
    "adress"
  ) as HTMLInputElement;
  let adress = adressInput.value;
  customer.adress = adress;

  let cityInput: HTMLInputElement = document.getElementById(
    "city"
  ) as HTMLInputElement;
  let city = cityInput.value;  
  customer.city = city;

   let cardNameInput = document.getElementById(
    "NameOnCard"
  ) as HTMLInputElement;
  let cardName = cardNameInput.value;
  customer.cardName = cardName;

  let cardNumberInput = (document.getElementById(
    "cardNumber"
  ) as HTMLInputElement).value;
  customer.cardNumber = parseInt(cardNumberInput);

  let expInput = document.getElementById(
    "expMonth"
  ) as HTMLInputElement;
  let exp = expInput.value;  
  customer.expDate = parseInt(exp);

  let cvvInput = (document.getElementById(
    "cvv"
  ) as HTMLInputElement).value;
  customer.cvv = parseInt(cvvInput);

  let orderNumber: number[] = [];
  let number = 0;
  for (let i = 0; i < 10; i++) {
    orderNumber.push(Math.round(Math.random() * 9));
  }
  for (let i = 0; i < orderNumber.length; i++) {
    number = orderNumber[i] + number;
  }

  customer.orderNr = number;
  customer.order = cartList;

  orderList.push(customer);
  let listastext = JSON.stringify(customer);
  sessionStorage.setItem("orderConfirmationList", listastext);


}

export function orderSummary () {

  let order= new Orderconfirmation ();

  let customerInfo:HTMLElement = document.getElementById("customerInfo");
  customerInfo.className = "orderConfirmation";

  let section:HTMLElement = document.createElement("section");
  section.className = "shippingContainer";
  customerInfo.appendChild(section);

  let headline = document.createElement("h4");
  headline.innerHTML = "Order confirmation";
  section.appendChild(headline);
    
  let name:HTMLSpanElement = document.createElement("span");
  let adress:HTMLSpanElement = document.createElement("span");
  let city = document.createElement("span");
  let email = document.createElement("span");
  let ordernr = document.createElement("span");
  section.appendChild(name);
  section.appendChild(adress);
  section.appendChild(city);
  section.appendChild(email);
  section.appendChild(ordernr);

  for (let i = 0; i < order.orderList.length; i++) {
    console.log("körs ej?");
    
  name.innerHTML = "" + order.orderList[i].name;
    
  }
}