import { burgerMenu } from "./functions/burgerMenu";
import { productList } from "./models/objects";


window.onload = () => {
    burgerMenu();
    createProductSpec();
};

function createProductSpec () {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].productSpec == true) {
            let container: HTMLElement = document.getElementById("product-spec");
            let name:HTMLHeadingElement = document.createElement("h3");
            name.innerHTML = productList[i].name;
            container.appendChild(name);
            let div: HTMLDivElement = document.createElement("div");
            div.className = "dogcontainer"
            container.appendChild(div);
            let dogproduct:HTMLDivElement = document.createElement("div");
            dogproduct.className = "dogproduct";
            div.appendChild(dogproduct);
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
            let info:HTMLParagraphElement = document.createElement("p");
            info.innerHTML = productList[i].info;
            dogproduct.appendChild(info);

            let age:HTMLParagraphElement = document.createElement("p");
            age.innerHTML = "Ålder:";
            dogproduct.appendChild(age); 
            
            let favoriteToy:HTMLParagraphElement = document.createElement("p");
            favoriteToy.innerHTML = "Favoritleksak:";
            dogproduct.appendChild(favoriteToy);

            let favoriteCandy:HTMLParagraphElement = document.createElement("p");
            favoriteCandy.innerHTML = "Favoritgodis:";
            dogproduct.appendChild(favoriteCandy); 

            let price:HTMLParagraphElement = document.createElement("p");
            price.innerHTML = "$" + productList[i].price;
            dogproduct.appendChild(price);
        }
        
    }
    
}