import { DOMSelectors } from "./DOM";

function validateForm() {
  var formValue = DOMSelectors.pokeInput.value;
  if (formValue == "") {
    alert("Please fill in the searchbar");
    return false;
  }
}

export { validateForm };
