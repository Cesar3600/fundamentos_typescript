() => {
  const login = (data: { email: string; password: string }): void => {
    console.log(data.email, data.password);
  };

  //login('nico@nico.co', '12312312312');
  login({
    email: 'nico@nico.co',
    password: '12312312312',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Prod1',
    createAt: new Date(1993, 1, 1),
    stock: 12,
  });
  addProduct({
    title: 'Prod2',
    createAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL',
  });
  console.log(products);
};
