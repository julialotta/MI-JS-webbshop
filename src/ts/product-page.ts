import { burgerMenu } from "./functions/burgerMenu";
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

this.name = name;
this.picture = picture;
this.info = info;
this.category = category;
this.price = price;
this.cart = cart; */


let product1 = new Products(
    "Doga Lipa",
   "Sassy, classy and bad-assy 1.1a3ed496.png",
   "Dog with pink glasses",
   "This english french has a talent for singing.",
   1,
   500,
   false);

   let product2 = new Products(
    "Alan Barker",
   "Sassy, classy and bad-assy 2.b3f78dba.png",
   "Dog with headphones",
   "This english, norweigan AND french is an awesome DJ.",
   1,
   500,
   false);

   let product3 = new Products(
    "Louis Vuffton",
   "Sassy, classy and bad-assy 3.a8049177.png",
   "Dog with LV bag",
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum laborum corrupti eius distinctio consequatur.",
   1,
   500,
   false);

   let product4 = new Products(
    "Post Mabone",
   "Sassy, classy and bad-assy 4.33d25a77.png",
   "Dog with black cape",
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum laborum corrupti eius distinctio consequatur.",
   1,
   500,
   false);

   let productList = [
       product1,
       product2,
       product3,
       product4
   ]

   /* <div id="sassy" class="dogcontainer">
    <div class="dogproduct">
     <div class="dogimgcontainer">
        <img src="./assets/product images/Sassy, classy and bad-assy/Sassy, classy and bad-assy 1.png"
             alt="Dog with pink glasses">
          
             <div class="cartSymbolContainer">
             <i class="fas fa-cart-plus"></i>
            </div>
            </div>
            <h5>Doga Lipa</h5>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum laborum corrupti eius distinctio
                  consequatur.</p>
            <p class="dogprice">$1500</p>
    </div> */

function addProducts () {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].category = 1) {
            let cat1 = document.getElementById("sassy");
            let dogproduct:HTMLDivElement = document.createElement("div");
            dogproduct.className = "dogproduct";
            cat1.appendChild(dogproduct);
            let dogImgContainer:HTMLDivElement = document.createElement("div");
            dogImgContainer.className = "dogimgcontainer";
            dogproduct.appendChild(dogImgContainer);
            let dogImg: HTMLImageElement = document.createElement("img");
            dogImg.src = productList[i].picture;
            dogImg.alt = productList[i].pictureAlt;
            dogImgContainer.appendChild(dogImg);
            let cartSymbol = document.createElement("div");
            cartSymbol.className = "cartSymbolContainer";
        }
        
        
        
    }
    
}