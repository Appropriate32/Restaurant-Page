import pizzaImage from "./images/caption.jpg";

function homeDom() {
    const content = document.querySelector("#content");
    const headingText = document.createElement("h1");
    const image = document.createElement("img");
    const paraText = document.createElement("p");
    content.innerHTML = ``;
    headingText.textContent = "Eissa's Eatery";
    paraText.textContent = "Please come to our restaurant, it's the best you will ever taste!";
    image.src = pizzaImage;
    image.classList.add("pizza");

    content.appendChild(headingText);
    content.appendChild(image);
    content.appendChild(paraText);
    
}

export {homeDom};