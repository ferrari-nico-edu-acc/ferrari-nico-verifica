/** @type {HTMLDivElement} */
const lamp = document.querySelector("#lamp");
/** @type {HTMLButtonElement} */
const warm_button = document.querySelector("#warm_button");
/** @type {HTMLButtonElement} */
const cold_button = document.querySelector("#cold_button");
/** @type {HTMLButtonElement} */
const rgb_button = document.querySelector("#rgb_button");

let last_color = "warm";

function change_color_to(to) {
    lamp.classList.remove(last_color);
    lamp.classList.add(to);
    last_color = to;
}

warm_button.addEventListener("click", () => change_color_to("warm"));
cold_button.addEventListener("click", () => change_color_to("cold"));
rgb_button.addEventListener("click", () => change_color_to("rgb"));