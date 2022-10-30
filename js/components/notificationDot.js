const notificationDot = document.querySelector(".notification-dot");

function itemsInCartNotification() {
  if (window.localStorage.length === 0) {
    notificationDot.style.visibility = "hidden";
  }
}

itemsInCartNotification();
