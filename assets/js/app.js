/*Navigation*/
let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
let burgerMenuClose = document.querySelector(".burgerMenuClose");
let navLinks = document.querySelector(".nav-links");
/*Let = En literal der bruges til at deklarere en variabel.*/
/*document = kobler det til ens html */
/*querySelector =  Søger efter elementer i dokumentet, 
der har class eller id*/

burgerMenuOpen.addEventListener("click", () => {
  /*Fortæller at der skal være en Click event listener på array'en*/
  navLinks.classList.add("active");
  burgerMenuOpen.classList.add("active");
  burgerMenuClose.classList.add("active");
  /*Laver en classList på arrays for at manipulere class samtidig 
  en add("active") på for så at kunne manipulere class i css. */
});

burgerMenuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
  /*Laver et click event på burgermenuclose som remover active class ved 
  click. */
});
