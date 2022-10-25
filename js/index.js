const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products";
const featuredProducts = document.querySelector(".featured-products");

async function getFeaturedProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      for (let t = 0; t < products[i].categories.length; t++) {
        const productImage = products[i].images[0].src;
        const productName = products[i].name;
        const productPrice = products[i].prices.price;
        const productId = products[i].id;

        if (products[i].categories[t].name.toLowerCase() !== "featured") {
          continue;
        }
        if (t === 4) {
          break;
        }

        featuredProducts.innerHTML += `
        <div class="featured-product">
            <div class="featured-product-card-img">
              <a href="jacket.html?id=${productId}">
              <img src="${productImage}" alt="Product image">
              </a>
            </div>
            <div class="featured-product-card-copy">
              <h3>${productName}</h3>
              <div class="dots colored-dots">
                <span class="yellow-dot dot"></span>
                <span class="red-dot dot"></span>
                <span class="blue-dot dot"></span>
              </div>
              <p>${productPrice} kr</p>
              <a href="jacket.html?id=${productId}" class="view-button">View</a>
            </div>
          </div>
        `;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getFeaturedProducts();
