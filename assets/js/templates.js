// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  `
    <p><b>${product.title}</b></p>
    <p><i>${product.price} kr</i></p>
    <img src="${product.image}${product.id}">
    <button><a href="page.html?id=${product.id}">Se produkt</a></button>
    <button class="favBtn" id="${product.id}">">Føj til favoriter</button>  
    `;

export const productPageTmpl = (product) =>
  `
    <h2>${product.title}</h2>
    <p><i>${product.price} kr</i></p>
    <img src="${product.image}${product.id}">
    <p>${product.description}</p>
    <button><a href="index.html">Tilbage</a></button> 

<br>
`;

export const favListTmpl = (product) =>
  `
    <p><b>${product.title}</b></p>
    <p><i>${product.price} kr</i></p>
    <img src="${product.image}${product.id}">
    <button><a href="page.html?id=${product.id}">Se produkt</a></button> 
    <button id="${product.id}">">Fjern fra favoritter</button> 
    `;
