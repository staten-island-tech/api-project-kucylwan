import { DOMSelectors } from "./DOM";

var input = "";

function pokeSearch(event) {
  input = DOMSelectors.input.value;
  event.preventDefault();
  getPokemon();
}

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
            breedData.pokemon_species.forEach((name) => {
              if (partnerNumber >= 0) {
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

DOMSelectors.input.addEventListener("submit", pokeSearch);
