import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`);
    const data = await response.json();
    console.log(data.results);
    DOMSelectors.test.innerText = data.results[69].name;
  } catch (error) {
    console.log(error);
    alert("yabai");
  }
};
query();

/* thinkthonk brain juice time
1. get list of pokemon
2. user puts in pokemon
3. match pokemon to array
3a. display pokemon image
4. get species of pokemon
5. get egg group of species
6. display egg group
7. get pokemon in egg group
8. display 5 random pokemon in egg group
*/
