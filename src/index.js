import "./styles.css";
import { homeDom } from "./home";
import { menuDom } from "./menu";

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");

homeButton.addEventListener("click", () => {
    homeDom();
});

menuButton.addEventListener("click", () => {
    menuDom();
});

