import { CompleteOrder, completeOrderList } from "../models/Completeorder";

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
  let customer = new CompleteOrder();
  let nameInput: HTMLInputElement = document.getElementById(
    "name"
  ) as HTMLInputElement;
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

  let listastext = JSON.stringify(completeOrderList);
  sessionStorage.setItem("completedOrderList", listastext);
}

export function orderNumber() {
  let orderNumber: number[] = [];
  let test = "";

  for (let i = 0; i < 10; i++) {
    orderNumber.push(Math.round(Math.random() * 9));
  }
  for (let i = 0; i < orderNumber.length; i++) {
    test = orderNumber[i] + test;
  }
  let ordernr = document.getElementsByClassName("orderNumber")[0];
  ordernr.innerHTML = "Ordernummer: " + test;
}
