const dataFilter = (products, searchParameter) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchParameter.toLowerCase())
  );
};

const submitHandler = (e) => {
  e.preventDefault();
  let sortValue = document.getElementById("sort-selector").selectedOptions[0]
    .text;
  actualProducts = sortProducts(
    dataFilter(productsData, e.target[0].value),
    sortValue
  );
  renderProducts(paginate(actualProducts, 1));
  renderPageButtons();
};
