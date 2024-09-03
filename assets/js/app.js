import { productsList } from "./products_list.js";
import { productsPage } from "./products_page.js";

const app = {};

app.init = async () => {
  productsList();
  productsPage();
};

app.init();
