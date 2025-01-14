let body = document.querySelector("body");

let toggle = document.querySelector(".main__header-style-mode-toggle");
let toggleCircle = toggle.querySelector(".toggle-circle");

const lightThemeClassName = "light-theme";
const toggleClassName = "toggle";

toggle.addEventListener("click", () =>{
    body.classList.toggle( lightThemeClassName);
    toggleCircle.classList.toggle(toggleClassName);
})