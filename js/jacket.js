const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://mhaarseth.no/flower-power/wp-json/wc/store/products/" + id;

async function getJacket() {
  const jacketContainer = document.querySelector(".jacket-main-container");

  try {
    const response = await fetch(url);
    const jacket = await response.json();

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
            <strong>${jacketPrice} kr</strong>
          </div>
          
        </section>
    </div>
`;
  } catch (error) {
    console.log(error);
  }
}

getJacket();

const addItemButton = document.querySelector(".add-cta-button");
const jacketSize = document.getElementById("sizes");

addItemButton.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.reload();
  window.localStorage.setItem(id, id);
});
