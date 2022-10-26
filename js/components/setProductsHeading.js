const productsHeading = document.querySelector(".products-heading");

export function setProductsHeading(parameter) {
  if (parameter.toLowerCase() === "womens") {
    productsHeading.innerHTML = `
    Women's Jackets
    `;
  }
}
