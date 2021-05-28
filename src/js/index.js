import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

let input = "oshawott";

/* function search() {
  let input = DOMSelectors.input.value;
  console.log(input);
  const getPokemon = async function () {
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
} */

//DOMSelectors.input.addEventListener("submit", search);

const getPokemon = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();

    const getEggGroup = async function () {
      try {
        const eggResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`
        );
        const eggData = await eggResponse.json();
        var groupNumber = eggData.egg_groups.length - 1;

        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="poke-info">
        <div class="poke-profile">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png"
            alt=""
            class="poke-image"
          />
          <h3 class="poke-header">${data.name}</h3>
          <div class="poke-text">
            <p class="egg-group">Possible Egg Groups</p>

`
        );

        eggData.egg_groups.forEach((name) => {
          if (groupNumber >= 0) {
            DOMSelectors.grid.insertAdjacentHTML(
              "beforeend",
              `
                <p class="egg-group-name">${eggData.egg_groups[groupNumber].name}</p>
              </div>
    `
            );
            groupNumber = groupNumber - 1;
          } else {
          }
        });

        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          ` <div class="poke-egg-list">
          <p class="egg-list">Possible breeding partners</p>

`
        );

        const eggUrl = eggData.egg_groups[0].url;
        const getBreedPartner = async function () {
          try {
            const breedResponse = await fetch(`${eggUrl}`);
            const breedData = await breedResponse.json();
            var partnerNumber = breedData.pokemon_species.length - 1;
            console.log(partnerNumber);
            breedData.pokemon_species.forEach((name) => {
              if (partnerNumber >= 0) {
                console.log("poggers");
                DOMSelectors.grid.insertAdjacentHTML(
                  "beforeend",
                  `
                  <li class="egg-list">${breedData.pokemon_species[partnerNumber].name}</li>
                  </div>
        `
                );
                partnerNumber = partnerNumber - 1;
              } else {
              }
            });
          } catch (error) {
            console.log(error);
          }
        };
        getBreedPartner();
      } catch (error) {
        console.log(error);
      }
    };
    getEggGroup();
  } catch (error) {
    console.log(error);
    alert("yabai");
  }
};
getPokemon();

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

{
  /* <li class="egg-list">Clefairy</li>
<li class="egg-list">Jigglypuff</li>
<li class="egg-list">Chansey</li>
<li class="egg-list">Marill</li>
<li class="egg-list">Mawile</li>
</div>
</div>
</div>

</div> */
}

/*
            <p class="egg-group">${eggData.egg_groups[0].name}</p>
          </div>
    


function eggGroupNumber() {
  if (groupNumber >= 0) {
    console.log("hi");
    groupNumber = groupNumber - 1;
  } else {
    console.log("bye");
  }
}
if (groupNumber >= 0) {
  eggGroupNumber;
} else {
  console.log("bye");
}
 */
