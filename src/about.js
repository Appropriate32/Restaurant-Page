function aboutDom() {
    const content = document.querySelector("#content");

    content.innerHTML = `<h1 class="about-heading">About Us</h1>
        <p>Founded in 2008, our restaurant has spent over a decade serving flavorful dishes made from the freshest ingredients.
We believe in quality, hospitality, and creating a dining experience you’ll want to return to again and again.</p>
        <h2>Contact Info</h2>
        <div class="contact-items">
            <div class="contact-item">
                <h3>Phone Number</h3>
                <p>+63 95340030</p>
            </div>
            <div class="contact-item">
                <h3>Email Address</h3>
                <p>totallyrealemail23@gmail.com</p>
            </div>
            <div class="contact-item">
                <h3>Location</h3>
                <p>Pine Avenue</p>
            </div> 
        </div>`;
}

export {aboutDom};