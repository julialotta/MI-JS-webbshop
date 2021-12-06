export function hideForm() {
    let firstForm: HTMLElement = document.getElementById(
  "firstOfForms"
) as HTMLElement;
let secondForm: HTMLElement = document.getElementById(
  "secondOfForms"
) as HTMLElement;
  firstForm.style.display = "none";
  secondForm.style.visibility = "hidden";
}