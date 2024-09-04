import { fetchProducts } from "./fetch_data.js";
import { favListTmpl } from "./templates.js";

// Array med produkter
let products = await fetchProducts();

export function favorites() {
  const favoriteListContainer = document.querySelector(".favorite-container");

  // Parse: Når du henter JSON data udefra, som skal bruges i JavaSpript-koden, skal det først omdannes til JavaScript-objekter - Det sørger 'parse'-funktionen for.

  let favorites = JSON.parse(localStorage.getItem("favList")) || [];

  function renderFavoriteList() {
    if (favoriteListContainer) {
      if (favorites.length != 0) {
        favoriteListContainer.innerHTML = "";
        favorites.forEach((product) => {
          favoriteListContainer.insertAdjacentHTML(
            "beforeend",
            favListTmpl(product)
          );
        });
      } else {
        favoriteListContainer.innerHTML =
          "Der er ikke tilføjet nogle favoritter til listen";
      }
    }

    /* Slet funktionalitet */
    const favRemoveBtn = document.querySelectorAll(".removeBtn");
    favRemoveBtn.forEach((btn) => {
      btn.addEventListener("click", removeFromFav);
    });
  }

  renderFavoriteList();

  function addToFav(e) {
    const productID = e.target.id;
    const productToAdd = products.find((product) => product.id == productID);

    const exist = favorites.find((product) => product.id == productToAdd.id);

    if (!exist) {
      favorites.push(productToAdd);

      //Stringify: For at gemme JavaScript objekter i localStorage, skal de først omdannes til tekst/'string' - Det sørger 'stringify' funktionen for
      localStorage.setItem("favList", JSON.stringify(favorites));

      renderFavoriteList();
    } else {
      console.log("Produktet er allerede tilføjet til favoritter");
    }
  }

  const favBtn = document.querySelectorAll(".favBtn");
  favBtn.forEach((btn) => {
    btn.addEventListener("click", addToFav);
  });

  function removeFromFav(e) {
    const productIdToRemove = e.target.id;
    const indexOfFav = favorites.findIndex(
      (product) => product.id == productIdToRemove
    );

    favorites.splice(indexOfFav, 1);

    localStorage.setItem("favList", JSON.stringify(favorites));

    renderFavoriteList();

    /* Hvis favorit-listen er tom, så slettes localStorage helt */
    if (favorites.length == 0) localStorage.removeItem("favList");
  }
}
