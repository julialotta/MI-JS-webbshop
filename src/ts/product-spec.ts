import { burgerMenu } from "./functions/burgerMenu";
import { createProductSpec } from "./functions/createProductSpec";
import { removeProductSpec } from "./functions/removeProductSpec";


window.onload = () => {
    burgerMenu();
    createProductSpec ();
    let arrow = document.getElementById("backArrow");
    arrow.addEventListener("click", () => {
                removeProductSpec ();
            });
};


