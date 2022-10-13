(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
  prices.push(121212);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean)[] = ['hola'.true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 2, 1, 1, 212]; // ['as'] si fuera string mandaria error

  numbers.map((item) => item * 2);
})();
