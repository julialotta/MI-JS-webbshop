import { burgerMenu } from "./functions/burgerMenu";
import { createProductSpec } from "./functions/createProductSpec";
import { backToProductPage } from "./functions/backToProductPage";


window.onload = () => {
    burgerMenu();
    createProductSpec ();
    let arrow = document.getElementById("backArrow");
    arrow.addEventListener("click", () => {
                backToProductPage ();
            });
};


