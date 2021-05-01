let productsData = [];
let actualProducts = [];

const loadJsonData = async () => {
  try {
    let rawData = await fetch("../productsData.json");
    let data = await rawData.json();
    productsData = data;
    actualProducts = data;
  } catch (error) {
    console.log("Error when loading json data");
  }
};
