/** @type {HTMLDivElement} */
const lamp = document.querySelector("#lamp");
/** @type {HTMLButtonElement} */
const warm_button = document.querySelector("#warm_button");
/** @type {HTMLButtonElement} */
const cold_button = document.querySelector("#cold_button");
/** @type {HTMLButtonElement} */
const rgb_button = document.querySelector("#rgb_button");
/** @type {HTMLInputElement} */
const opacity_slider = document.querySelector("#opacity_slider");
/** @type {HTMLButtonElement} */
const light_switch = document.querySelector("#light_switch");
/** @type {HTMLSpanElement} */
const opacity_span = document.querySelector("#opacity_span");
/** @type {HTMLInputElement} */
const timer_input = document.querySelector("#timer_input");
/** @type {HTMLButtonElement} */
const timer_set_button = document.querySelector("#timer_set_button");
/** @type {HTMLHeadingElement} */
const timer_text = document.querySelector("#timer_text");

let last_color = "warm";

function change_color_to(to) {
    lamp.classList.remove(last_color);
    lamp.classList.add(to);
    last_color = to;
}

warm_button.addEventListener("click", () => change_color_to("warm"));
cold_button.addEventListener("click", () => change_color_to("cold"));
rgb_button.addEventListener("click", () => change_color_to("rgb"));

opacity_slider.addEventListener("input",() => {
    const opacity = Number(opacity_slider.value);
    if (!isFinite(opacity)) {
        return;
    }
    lamp.style.opacity = `${opacity/100}`;
});

light_switch.addEventListener("click",() => {
    document.body.classList.toggle("dark");
    lamp.classList.toggle("dark");
    opacity_span.classList.toggle("dark");
});

let minutes_left = 0

timer_set_button.addEventListener("click",() => {
    if (timer_input.value === "") {
        return;
    }
    const minutes = Number(timer_input.value);
    if (!isFinite(minutes)) {
        return;
    }
    timer_text.innerText = `La luce si spegnerà tra ${minutes} minuti`
})