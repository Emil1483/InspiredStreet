//let productsRow = document.createElement("div", { class: "row" });

//productsContainer.appendChild(productsRow);

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
      img.setAttribute("src", product.img);
      link.appendChild(img);
      productContainer.appendChild(link);
    } else {
      let img = document.createElement("img");
      img.setAttribute("src", product.img);
      productContainer.appendChild(img);
    }
    let productName = document.createElement("h4");
    productName.innerHTML = product.name;
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
    productPrice.innerHTML = "$ " + product.price.toFixed(2);
    productContainer.appendChild(productPrice);

    productsContainer.appendChild(productContainer);
  });
};

/*loadJsonData().then(() => {
  renderProducts(paginate(productsData, 1));
  renderPageButtons();
});*/

renderProducts(paginate(productsData, 1));
renderPageButtons();
