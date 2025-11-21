function menuDom() {
    const content = document.querySelector("#content");
    content.innerHTML = `<h1 class="menu-text">Menu</h1>
        <div class="menu">
            <div class="menu-section">
                <h2>Beverages</h2>
                <div class="menu-item">
                    <h3>Cola</h3>
                    <p>2$</p>
                </div>
                <div class="menu-item">
                    <h3>Lemonade</h3>
                    <p>1.5$</p>
                </div>
                <div class="menu-item">
                    <h3>Water</h3>
                    <p>1$</p>
                </div>
            </div>
            <div class="menu-section">
                <h2>Appetizers</h2>
                <div class="menu-item">
                    <h3>Fries</h3>
                    <p>4$</p>
                </div>
                <div class="menu-item">
                    <h3>Nuggets</h3>
                    <p>7$</p>
                </div>
                <div class="menu-item">
                    <h3>Tender Pops</h3>
                    <p>6$</p>
                </div>
            </div>
        </div>`;       
}

export {menuDom};