export { Products };

class Products {
    name: string;
    picture: string;
    info: string;
    category: number;
    price: number;
    cart: boolean;

        constructor(
            name: string,
            picture: string,
            info: string,
            category: number,
            price: number,
            cart: boolean
        )
        {  
            this.name = name;
            this.picture = picture;
            this.info = info;
            this.category = category;
            this.price = price;
            this.cart = cart;
     }};
/* 


let task1 = new Todos ("Something reeaaally important", false, 1);
let task2 = new Todos ("Something some what important...", false, 2);
let task3 = new Todos ("Something not that important", false, 3);

let list = JSON.parse(localStorage.getItem("savedList")) || [task1, task2, task3];
 */