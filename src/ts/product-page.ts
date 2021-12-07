/* import { Products } from "./models/Products";
 */import { burgerMenu } from "./functions/burgerMenu";
import { Products } from "./models/Products";


window.onload = () => {
    burgerMenu();
    addProducts();
/* funktionensNamn () */
};

/* Kategorier:
1 = Sassy classy and bad-assy
2 = Kriminella men snälla
3 = Singlar som vill mingla
4 = Call me Puppy
5 = Oldies but goodies 
*/
/* this.name = name;
            this.picture = picture;
            this.info = info;
            this.category = category;
            this.price = price;
            this.cart = cart; */


let product1 = new Products(
    "Doga Lipa",
   "https://lh6.googleusercontent.com/Kne70Tf-2aBfeb-qpSd-mFY1LltPblqUO_S3_vU-bb8EAil_cih87KVy_Tt3HSTaBMqNL2N4WWjO79O0FHXe=w1256-h1414",
   "This english french has a talent for singing.",
   1,
   500,
   false);

   let product2 = new Products(
    "Alan Barker",
   "https://drive.google.com/file/d/1_1Wpoij-cHS9EL1fWj-0-jZJnVrtVEiB/view?usp=sharing",
   "This english, norweigan AND french is an awesome DJ.",
   1,
   500,
   false);

   let productList = [
       product1,
       product2
   ]

function addProducts () {
    for (let i = 0; index < productList.length; i++) {
        const element = array[index];
        
    }
    
}