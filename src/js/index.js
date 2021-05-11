import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`);
    const data = await response.json();
    // console.log(data.results);
    // DOMSelectors.test.innerText = data.results[69].name;
    data.results.forEach((pokemon) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="poke-info">
      <div class="poke-profile">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          alt=""
          class="poke-image"
        />
        <h3 class="poke-header">${pokemon.name}</h3>
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
-->
    <!--  <div class="movie-card">
      <div class="movie-card-front">
        <img
          src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">The Dark Knight</h3>
        <div class="score-box">
          <p class="user-score">Community Score</p>
          <p class="user-score">8.4</p>
        </div>

        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">2020-06-12</p>
        </div>

        <div class="movie-genres">
          <li class="movie-genre">Sci-Fi</li>
          <li class="movie-genre">Fantasy</li>
          <li class="movie-genre">Horror</li>
        </div>
      </div>
    </div>`
      );
    });
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
