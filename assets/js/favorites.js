import { fetchProducts } from "./fetch_data.js";
import { favListTmpl } from "./templates.js";

/* Array med produkter */
let products = await fetchProducts();

export function favorites() {
  const favoriteListContainer = document.querySelector(".favorite-container");

  // Parse: Når du henter JSON data udefra, som skal bruges i JavaSpript-koden, skal det først omdannes til JavaScript-objekter - Det sørger 'parse'-funktionen for.
  let favorites = JSON.parse(localStorage.getItem("favList")) || [];

  function renderFavoriteList() {
    if (favoriteListContainer) {
      if (favorites.length != 0) {
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
  }

  renderFavoriteList();

  function addToFav(event) {
    const productID = event.target.id;
    /* find() anvendes i stedet for filter() da der kun skal findes ét objekt */
    const productToAdd = products.find((product) => product.id == productID);

    const exist = favorites.find((product) => product.id == productToAdd.id);
    if (!exist) {
      favorites.push(productToAdd);

      /* Stringify: For at gemme JS objekter i localStorage, skal de først omdannes til tekst/"string" - 
    Det sørger "stringify" funktionen for  */
      localStorage.setItem("favList", JSON.stringify(favorites));

      renderFavoriteList();
    } else {
      console.log("Produktet er allerede tilføjet");
    }
  }

  const favBtn = document.querySelectorAll(".favBtn");
  favBtn.forEach((btn) => {
    btn.addEventListener("click", addToFav);
  });

  /* hente localstorage ned, tilføje slet funktion, tilføje til localstorage */
  function removeFromFav() {
    console.log("Slet funktion");
  }

  const favRemoveBtn = document.querySelectorAll(".removeBtn");
  favRemoveBtn.forEach((btn) => {
    btn.addEventListener("click", removeFromFav);
  });
}
