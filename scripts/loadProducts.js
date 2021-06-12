//! Vi henter dataen fra firebase
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", 'https://ghostbusters-f259b-default-rtdb.firebaseio.com/bokliste.json', false); // false for synchronous request
xmlHttp.send(null);
let data = JSON.parse(xmlHttp.responseText);
let keys = Object.keys(data);

let allProducts = []
keys.forEach((key) => {
    allProducts = allProducts.concat(data[key]);
})

const renderProducts = (products) => {
    let productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        let productContainer = document.createElement("div");
        productContainer.classList.add("col-4");
        if (product.path) {
            let link = document.createElement("a");
            link.setAttribute("href", product.path);
            let img = document.createElement("img");
            img.setAttribute("src", product.bilde);
            link.appendChild(img);
            productContainer.appendChild(link);
        } else {
            let img = document.createElement("img");
            img.setAttribute("src", product.bilde);
            productContainer.appendChild(img);
        }
        let productName = document.createElement("h4");
        productName.innerHTML = product.tittel;
        productContainer.appendChild(productName);

        let rating = document.createElement("div");
        rating.classList.add("rating");

        for (let index = 0; index < Math.floor(product.rating); index++) {
            let star = document.createElement("i");
            star.className = "fa fa-star";
            rating.appendChild(star);
        }

        if (Math.ceil(product.rating) - product.rating === 0.5) {
            let star = document.createElement("i");
            star.className = "fa fa-star-half-o";
            rating.appendChild(star);
        }
        if (5 - product.rating > 0) {
            for (let index = 0; index < 5 - product.rating; index++) {
                let star = document.createElement("i");
                star.className = "fa fa-star-o";
                rating.appendChild(star);
            }
        }

        productContainer.appendChild(rating);

        let productPrice = document.createElement("p");
        productPrice.innerHTML = product.pris.toFixed(2) + " kr";
        productContainer.appendChild(productPrice);

        productsContainer.appendChild(productContainer);
    });
};

document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    query = document.getElementById("search").value.toUpperCase();

    let filtered = allProducts.filter(book => book.tittel.toUpperCase().startsWith(query));
    console.log(filtered);

    renderProducts(filtered);
});

renderProducts(allProducts);