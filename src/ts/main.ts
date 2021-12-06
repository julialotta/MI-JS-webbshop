window.onload = function () {
  hideForm();
  openForm();
};

let firstForm: HTMLElement = document.getElementById(
  "firstOfForms"
) as HTMLElement;
let secondForm: HTMLElement = document.getElementById(
  "secondOfForms"
) as HTMLElement;
function hideForm() {
  firstForm.style.display = "none";
  secondForm.style.display = "none";
}
function openForm() {
  let openFirstForm: HTMLElement = document.getElementById(
    "openFirstForm"
  ) as HTMLElement;
  let openSecondForm: HTMLElement = document.getElementById(
    "openSecondForm"
  ) as HTMLElement;
  openFirstForm.style.cursor = "pointer";
  openSecondForm.style.cursor = "pointer";

  let openArrow: HTMLElement = document.getElementById(
    "openFirstArrow"
  ) as HTMLElement;
  let secondArrow: HTMLElement = document.getElementById(
    "openOrCloseArrow"
  ) as HTMLElement;
  openFirstForm.addEventListener("click", () => {
    if (window.getComputedStyle(firstForm).display === "none") {
      firstForm.style.display = "";

      openArrow.classList.remove("bi-chevron-compact-down");

      openArrow.classList.add("bi-x-lg");
    } else {
      firstForm.style.display = "none";
      openArrow.classList.remove("bi-x-lg");
      openArrow.classList.add("bi-chevron-compact-down");
    }
  });

  openSecondForm.addEventListener("click", () => {
    if (window.getComputedStyle(secondForm).visibility === "hidden") {
      secondForm.style.visibility = "visible";

      secondArrow.classList.remove("bi-chevron-compact-down");

      secondArrow.classList.add("bi-x-lg");
    } else {
      secondForm.style.visibility = "hidden";
      secondArrow.classList.remove("bi-x-lg");
      secondArrow.classList.add("bi-chevron-compact-down");
    }
  });
}
