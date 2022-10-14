import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Prod1',
  createAt: new Date(1993, 1, 1),
  stock: 5,
});

addProduct({
  title: 'Prod2',
  createAt: new Date(1993, 1, 1),
  stock: 6,
  size: 'XL',
});

console.log(products);

const total = calcStock();
console.log(total);
