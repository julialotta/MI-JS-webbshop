import { burgerMenu } from "./functions/burgerMenu";
import { productList } from "./models/objects";


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

this.name
this.picture
this.info
this.category
this.price
this.cart */



function addProducts () {
    for (let i = 0; i < productList.length; i++) {
            let dogproduct:HTMLDivElement = document.createElement("div");
            let dogImgContainer:HTMLDivElement = document.createElement("div");
            dogImgContainer.className = "dogimgcontainer";
            dogproduct.appendChild(dogImgContainer);
            let dogImg: HTMLImageElement = document.createElement("img");
            dogImg.src = productList[i].picture;
            dogImg.alt = productList[i].pictureAlt;
            dogImgContainer.appendChild(dogImg);
            let cartSymbolContainer: HTMLDivElement = document.createElement("div");
            cartSymbolContainer.className = "cartSymbolContainer";
            dogImgContainer.appendChild(cartSymbolContainer);
            let cartSymbol: HTMLElement = document.createElement("i");
            cartSymbol.className = "fas fa-cart-plus";
            cartSymbolContainer.appendChild(cartSymbol);
            let name:HTMLHeadingElement = document.createElement("h5");
            name.innerHTML = productList[i].name;
            dogproduct.appendChild(name);
            let info:HTMLHeadingElement = document.createElement("p");
            info.innerHTML = productList[i].info;
            dogproduct.appendChild(info);
            let price:HTMLHeadingElement = document.createElement("p");
            price.innerHTML = "$" + productList[i].price;
            dogproduct.appendChild(price);

        if (productList[i].category == 1) {
            let cat1: HTMLElement = document.getElementById("sassy");
            dogproduct.className = "dogproduct";
            cat1.appendChild(dogproduct);          
        }
        if (productList[i].category == 2) {
            let cat2: HTMLElement = document.getElementById("kriminella");
            dogproduct.className = "dogproduct";
            cat2.appendChild(dogproduct);          
        }
        if (productList[i].category == 3) {
            let cat3: HTMLElement = document.getElementById("singlar");
            dogproduct.className = "dogproduct";
            cat3.appendChild(dogproduct);          
        }
        if (productList[i].category == 4) {
            let cat4: HTMLElement = document.getElementById("puppy");
            dogproduct.className = "dogproduct";
            cat4.appendChild(dogproduct);          
        }
        if (productList[i].category == 5) {
            let cat5: HTMLElement = document.getElementById("oldies");
            dogproduct.className = "dogproduct";
            cat5.appendChild(dogproduct);          
        }
        
    }
    
}