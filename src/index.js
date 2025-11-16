import "./styles.css";
import { homeDom } from "./home";
import pizzaImage from "./images/caption.jpg";

const homeButton = document.querySelector(".home-button");

homeButton.addEventListener("click", () => {
    homeDom();
})