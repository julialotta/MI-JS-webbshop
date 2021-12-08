export class Products {
    name: string;
    picture: string;
    pictureAlt: string;
    info: string;
    age: number;
    favoriteToy: string;
    favoriteCandy: string;
    snores: string;
    category: string;
    price: number;
    cart: boolean;
    productSpec: boolean;

        constructor(
            name: string,
            picture: string,
            pictureAlt: string,
            info: string,
            age: number,
            favoriteToy: string,
            favoriteCandy: string,
            snores: string,
            category: string,
            price: number,
            cart: boolean,
            productSpec: boolean
        )
        {  
            this.name = name;
            this.picture = picture;
            this.pictureAlt = pictureAlt;
            this.info = info;
            this.age = age;
            this.favoriteToy= favoriteToy;
            this.favoriteCandy =favoriteCandy;
            this.snores = snores;
            this.category = category;
            this.price = price;
            this.cart = cart;
            this.productSpec = productSpec;
     }};
/* 


let task1 = new Todos ("Something reeaaally important", false, 1);
let task2 = new Todos ("Something some what important...", false, 2);
let task3 = new Todos ("Something not that important", false, 3);

let list = JSON.parse(localStorage.getItem("savedList")) || [task1, task2, task3];
 */