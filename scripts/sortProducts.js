const sortProducts = (products, sortValue) => {
  switch (sortValue) {
    case "sort by price":
      return products.sort(sortBy("price"));

    case "sort by rating":
      return products.sort(sortBy("rating"));

    case "default sorting":
      return products;

    default:
      return products;
  }
};

const sortBy = (property) => {
  return (product1, product2) => {
    if (product1[property] > product2[property]) return -1;

    if (product1[property] < product2[property]) return 1;

    return 0;
  };
};

const sortHandler = (e) => {
  actualProducts = sortProducts(
    actualProducts,
    e.target.selectedOptions[0].text
  );
  renderProducts(paginate(actualProducts, 1));
};
