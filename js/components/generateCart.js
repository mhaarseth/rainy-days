export async function generateCart() {
  for (let i = 0; i < window.localStorage.length; i++) {
    if (window.localStorage.key(i) === "size") {
      continue;
    }
    const productDetails =
      "https://mhaarseth.no/flower-power/wp-json/wc/store/products/" +
      window.localStorage.key(i);

    const cart = document.querySelector(".cart-products-info-grid");

    try {
      const response = await fetch(productDetails);
      const productDetail = await response.json();

      const productName = productDetail.name;
      const productImage = productDetail.images[0].src;
      const productImageAltText = productDetail.images[0].alt;
      const productPrice = productDetail.prices.price;

      cart.innerHTML += `
      <div class="product-details">
          <figure class="cart-products-info-grid-img">
          <img src="${productImage}" alt="${productImageAltText}" />
          </figure>
          <div class="cart-summary">
          <div class="cart-summary-line">
            <p>Model:</p>
            <p class="cart-summary-line-column-right">
              ${productName}
            </p>
          </div>
          <div class="cart-summary-line">
            <p>Size:</p>
            <p class="cart-summary-line-column-right">NA</p>
          </div>
          <div class="cart-summary-line">
            <p>Quantity:</p>
            <p class="cart-summary-line-column-right">1</p>
          </div>
          <div class="cart-summary-line">
            <p>Price:</p>
            <p class="cart-summary-line-column-right">${productPrice}</p>
          </div>
          </div>

        </div>
        </div>
          `;
    } catch (error) {
      console.log(error);
    }
  }
}
