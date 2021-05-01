const limit = 4;

const paginate = (products, page) => {
  return products.slice(page * limit - limit, page * limit);
};

const renderPageButtons = () => {
  let pages = Math.ceil(actualProducts.length / limit);
  let buttonsContainer = document.getElementById("page-buttons");
  buttonsContainer.innerHTML = "";
  for (let index = 0; index < pages; index++) {
    let btn = document.createElement("button");
    btn.innerHTML = index + 1;
    btn.addEventListener("click", () =>
      renderProducts(paginate(actualProducts, index + 1))
    );
    buttonsContainer.appendChild(btn);
  }
};
