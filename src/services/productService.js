import productsJSON from '../data/products';
const getProducts = () => {
  let products = JSON.parse(localStorage.getItem('Products'));
  if (!products || !products.length) {
    products = productsJSON;
    localStorage.setItem('Products', JSON.stringify(productsJSON));
  }
  return products;
};

export default { getProducts };
