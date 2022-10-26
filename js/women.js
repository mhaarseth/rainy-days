const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products";
const womensJackets = document.querySelector(".jackets-container");

async function getWomensJackets() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      for (let t = 0; t < products[i].categories.length; t++) {
        const productImage = products[i].images[0].src;
        const productName = products[i].name;
        const productPrice = products[i].prices.price;
        const productId = products[i].id;

        if (products[i].categories[t].name.toLowerCase() !== "womens") {
          continue;
        }

        womensJackets.innerHTML += `
<div class="product-jacket">
          <div class="jackets-card-img">
            <img src="${productImage}" alt="" />
          </div>
          <div class="jackets-card-copy">
            <h3>${productName}</h3>
            <div class="dots colored-dots">
              <span class="yellow-dot dot"></span>
              <span class="red-dot dot"></span>
              <span class="blue-dot dot"></span>
              <span class="green-dot dot"></span>
            </div>
            <p>${productPrice}kr</p>
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
getWomensJackets();
