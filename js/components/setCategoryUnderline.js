const mensCurrent = document.querySelector(".mens-nav");
const womensCurrent = document.querySelector(".womens-nav");

export function setCategoryUnderline(parameter) {
  if (parameter.toLowerCase() === "womens") {
    womensCurrent.classList.add("current");
  } else {
    mensCurrent.classList.add("current");
  }
}
