export function favorites() {
  /* let test = localStorage.getItem("favList"); 
 console.log(test)*/
  const favoriteListContainer = document.querySelector(".favorite-container");

  localStorage.setItem("favList", "test");

  // Parse: Når du henter JSON data udefra, som skal bruges i JavaSpript-koden, skal det først omdannes til JavaScript-objekter - Det sørger 'parse'-funktionen for.
  let favorites = JSON.parse(localStorage.getItem("favList")) || [];

  function renderFavoriteList() {
    if (favoriteListContainer) {
      if (favorites.length != 0) {
        favoriteListContainer.innerHTML =
          "Der er tilføjet noget til favoritter";
      } else {
        favoriteListContainer.innerHTML =
          "Der er ikke tilføjet nogle favoritter til listen";
      }
    }
  }

  renderFavoriteList();
}
