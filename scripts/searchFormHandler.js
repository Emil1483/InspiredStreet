const dataFilter = (products, searchParameter) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchParameter.toLowerCase())
  );
};

const submitHandler = (e) => {
  e.preventDefault();
  console.log("hei");
};
