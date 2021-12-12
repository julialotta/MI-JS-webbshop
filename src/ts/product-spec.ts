import { burgerMenu } from "./functions/burgerMenu";
import { createProductSpec, backToProductPage } from "./functions/createProductSpec";


window.onload = () => {
    burgerMenu();
    createProductSpec ();
    let arrow = document.getElementById("backArrow");
    arrow.addEventListener("click", () => {
                backToProductPage ();
            });
};


