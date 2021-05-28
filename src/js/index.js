import { DOMSelectors } from "./DOM";
import { validateForm } from "./form";

var input = "";

function pokeRefresh() {
  const inserted = document.getElementsByClassName("insert");
  const groups = document.getElementsByClassName("egg-group-name");
  const partnerName = document.getElementsByClassName("egg-list");

  while (inserted.length > 0) {
    inserted[0].parentNode.removeChild(inserted[0]);
  }
}

function pokeSearch(event) {
  validateForm();
  event.preventDefault();
  input = DOMSelectors.pokeInput.value.toLowerCase();

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
          `<div class="poke-info insert" >
        <div class="poke-profile insert">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png"
            alt=""
            class="poke-image"
          />
          <h3 class="poke-header insert">${data.name}</h3>
          <div class="poke-text insert">
            <p class="egg-group insert">Possible Egg Groups</p>

`
        );

        eggData.egg_groups.forEach((name) => {
          if (groupNumber >= 0) {
            DOMSelectors.grid.insertAdjacentHTML(
              "beforeend",
              `
                <p class="egg-group-name insert">${eggData.egg_groups[groupNumber].name}</p>
              </div>
    `
            );
            groupNumber = groupNumber - 1;
          } else {
          }
        });

        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          ` <div class="poke-egg-list insert">
          <p class="egg-group insert">Other Pokemon in Egg Group</p>

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
                  <li class="egg-list insert">${breedData.pokemon_species[partnerNumber].name}</li>
                  </div>
        `
                );
                partnerNumber = partnerNumber - 1;
              } else {
              }
            });
          } catch (error) {
            console.log(error);
            alert("something went wrong ");
          }
        };
        getBreedPartner();
      } catch (error) {
        console.log(error);
        alert("something went wrong ");
      }
    };
    getEggGroup();
  } catch (error) {
    console.log(error);
    alert("something went wrong ");
  }
};

DOMSelectors.input.addEventListener("submit", pokeSearch);
DOMSelectors.submit.addEventListener("click", pokeRefresh);
