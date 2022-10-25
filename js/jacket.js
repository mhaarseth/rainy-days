const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products/" + id;

async function getJacket() {
  const jacketContainer = document.querySelector(".jacket-main-container");

  try {
    const response = await fetch(url);
    const jacket = await response.json();
    console.log(jacket);

    const productName = jacket.name;
    const jacketImage = jacket.images[0].src;
    const imageAltText = jacket.images[0].alt;
    const jacketDescription = jacket.description;
    const jacketPrice = jacket.prices.price;

    jacketContainer.innerHTML += `
    <div class="jacket-heading">
    <h1>${productName}</h1>
    </div>
    <div class="jacket-information-container">
        <section class="jacket-left">
          <figure class="jacket-img-big">
            <img src="${jacketImage}" alt="${imageAltText}" />
          </figure>
        </section>
        <section class="jacket-right">
          <div class="jacket-copy">
            <p>
            ${jacketDescription}
            </p>
            <strong>Price: ${jacketPrice}kr</strong>
          </div>
          <form class="jacket-choices">
            <label>Jacket size:</label>
            <select name="sizes" id="sizes">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <label for="quantity">Quantity:</label>
            <select name="quantity" id="quantity">
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="submit" class="add-cta-button">Add to cart</button>
          </form>
        </section>
        </div>
`;
  } catch (error) {
    console.log(error);
  }
}

getJacket();
