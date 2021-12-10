export function customerInfo () {
let nameInput:HTMLInputElement = document.getElementById("name") as HTMLInputElement;
let cName = nameInput.value;
console.log(cName);

}

export function hideForm() {
  let bothforms = document.getElementsByClassName("forms");
  for (let i = 0; i < bothforms.length; i++) {
    let hideForms = bothforms[i] as HTMLElement;
    hideForms.style.display = "none";
  }
}

export function openForm() {
  let formsDisplayButton = document.getElementsByClassName("closeOpenForm");

  for (let i = 0; i < formsDisplayButton.length; i++) {
    let formHeading = formsDisplayButton[i] as HTMLElement;
    formHeading.style.cursor = "pointer";
    formHeading.addEventListener("click", () => {
      let forms = document.getElementsByClassName("forms");
      let theForms = forms[i] as HTMLElement;

      let openArrow = document.getElementsByClassName("openAndClose");
      let arrowAndX = openArrow[i] as HTMLElement;

      if (window.getComputedStyle(theForms).display === "none") {
        theForms.style.display = "";

        arrowAndX.classList.remove("bi-chevron-compact-down");

        arrowAndX.classList.add("bi-x-lg");
      } else {
        theForms.style.display = "none";
        arrowAndX.classList.remove("bi-x-lg");
        arrowAndX.classList.add("bi-chevron-compact-down");
      }
    });
  }
}



/* function addToList() {
    let input = document.getElementById("todoinput");
    let prio = document.getElementById("prioinput");
        if ((input.value.length == 0) || (prio.value == "Pick priority") ) {
            alert("Make sure to write something and to pick priority");
        } else {
    let newTask = input.value;
    let listObject = new Todos (newTask);
    let val = prio.value;
    listObject.checked = false; 

    if (val == "1") {
        listObject.prio = 1;
    } if (val == "2") {
         listObject.prio = 2;
    } if (val == "3") {
         listObject.prio = 3
    }

    list.push(listObject);
    input.value = "";
    prio.value = "Pick priority"
    updateLocalStorage ();
}
} */