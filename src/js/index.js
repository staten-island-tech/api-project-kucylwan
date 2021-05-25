import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

function search() {
  const input = DOMSelectors.input.value;
  console.log(input);
  const getPokemon = async function (e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );
      const data = await response.json();
      console.log(data.results);
      // DOMSelectors.test.innerText = data.results[69].name;

      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="poke-info">
      <div class="poke-profile">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          alt=""
          class="poke-image"
        />
        <h3 class="poke-header">${data.name}</h3>
        <div class="poke-text">
          <p class="egg-group">Egg Group</p>
          <p class="egg-group">Fairy</p>
        </div>

        <div class="poke-egg-list">
          <p class="egg-list">Possible breeding partners</p>
          <li class="egg-list">Clefairy</li>
          <li class="egg-list">Jigglypuff</li>
          <li class="egg-list">Chansey</li>
          <li class="egg-list">Marill</li>
          <li class="egg-list">Mawile</li>
        </div>
      </div>
    </div>

    </div>`
      );
    } catch (error) {
      console.log(error);
      alert("yabai");
    }
  };
  getPokemon();
}

/* const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
    const data = await response.json();
    // console.log(data.results);
    // DOMSelectors.test.innerText = data.results[69].name;

    DOMSelectors.grid.insertAdjacentHTML(
      "beforeend",
      `<div class="poke-info">
      <div class="poke-profile">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          alt=""
          class="poke-image"
        />
        <h3 class="poke-header">${data.name}</h3>
        <div class="poke-text">
          <p class="egg-group">Egg Group</p>
          <p class="egg-group">Fairy</p>
        </div>

        <div class="poke-egg-list">
          <p class="egg-list">Possible breeding partners</p>
          <li class="egg-list">Clefairy</li>
          <li class="egg-list">Jigglypuff</li>
          <li class="egg-list">Chansey</li>
          <li class="egg-list">Marill</li>
          <li class="egg-list">Mawile</li>
        </div>
      </div>
    </div>

    </div>`
    );
  } catch (error) {
    console.log(error);
    alert("yabai");
  }
};
query(); */

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

/*thinkthonks part 2
-user inputs pokemon name, take that variable + match it with the list? how to find a property within array?
-afterwards, grab the url + use that link to find the big boy information abt the mon
-from big boy info grab picture + species (new variable)
-use species variable to grab species data + egg group
-use egg group data to grab other pokemon? */
