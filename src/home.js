import pizzaImage from "./images/caption.jpg";

function homeDom() {
    const content = document.querySelector("#content");
    const headingText = document.createElement("h1");
    const image = document.createElement("img");
    const paraText = document.createElement("p");
    content.innerHTML = ``;

    // create hero container so styling can target heading/image/paragraph together
    const hero = document.createElement("div");
    hero.classList.add("hero");

    headingText.textContent = "Eissa's Eatery";
    paraText.textContent = "Please come to our restaurant, it's the best you will ever taste!";
    image.src = pizzaImage;
    image.classList.add("pizza");

    hero.appendChild(headingText);
    hero.appendChild(image);
    hero.appendChild(paraText);

    content.appendChild(hero);
    
}

export {homeDom};