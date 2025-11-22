import "./styles.css";
import { homeDom } from "./home";
import { menuDom } from "./menu";
import { aboutDom } from "./about";

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector(".home-button");
    const menuButton = document.querySelector(".menu-button");
    const aboutButton = document.querySelector(".about-button");

    

    homeButton.addEventListener("click", () => {
        homeDom();
        setActive(homeButton);
    });

    menuButton.addEventListener("click", () => {
        menuDom();
        setActive(menuButton); 
    });

    aboutButton.addEventListener("click", () => {
        aboutDom();
        setActive(aboutButton);
    });

    homeDom();
    setActive(homeButton);
});

function setActive(button) {
  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  button?.classList.add("active");
}



