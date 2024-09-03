import { fetchProducts } from "./fetch_data.js";
import { productPageTmpl } from "./templates.js";

// Array med produkter
let products = await fetchProducts();

export function productsPage() {
  const productPageContainer = document.querySelector(
    ".product-page-container"
  );

  if (productPageContainer) {
    let search = location.search;
    console.log(search);

    let productID = new URLSearchParams(search).get("id");
    console.log(productID);

    const findProduct = products.find((product) => product.id == productID);

    console.log("foundProduct", findProduct);

    productPageContainer.innerHTML = productPageTmpl(findProduct);
  }
}
