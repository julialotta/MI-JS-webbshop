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
