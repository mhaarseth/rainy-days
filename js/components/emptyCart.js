const emptyCartButton = document.querySelector(".empty-cart");

export function emptyCart() {
  emptyCartButton.addEventListener("click", function () {
    window.localStorage.clear();
    window.location.reload();
  });
}
