//your code here

const app = document.getElementById("app");
const swap = document.getElementById("swap");

swap.addEventListener("click", swapTheme);

function swapTheme() {
  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");
    swap.classList.remove("button_day");
    swap.classList.add("button_night");
  } else {
    app.classList.remove("night");
    app.classList.add("day");
    swap.classList.remove("button_night");
    swap.classList.add("button_day");
  }
}