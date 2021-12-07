//import { Products } from "../models/Products";
import { Products } from "../models/Products";

let product1 = new Products(
  "Doga Lipa",
  "Sassy, classy and bad-assy 1.1a3ed496.png",
  "Dog with pink glasses",
  "This english french has a talent for singing.",
  1,
  500,
  false
);

let product2 = new Products(
  "Alan Barker",
  "Sassy, classy and bad-assy 2.b3f78dba.png",
  "Dog with headphones",
  "This english, norweigan AND french is an awesome DJ.",
  1,
  500,
  false
);

export function updateTotal() {
  let prices = [product1, product2];
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    let total = product2.price + product1.price;
    console.log(total);
  }
}
/*export function updateTotal() {
  let prices =  document.getElementsByClassName("dogprice");
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    let priceOnDog = prices[i].innerHTML;
    let onlyTheNumber = priceOnDog.slice(1, 5);
    let test = parseFloat(onlyTheNumber);
    sum += test;
    console.log(sum);
  }

  let totalSum = document.getElementsByClassName("addSum")[0];
  totalSum.innerHTML = "$" + sum;
}*/
