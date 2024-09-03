import { productsList } from "./products_list.js";
import { productsPage } from "./products_page.js";
import { favorites } from "./favorites.js";

const app = {};

app.init = async () => {
  productsList();
  productsPage();
  favorites();
};

app.init();
