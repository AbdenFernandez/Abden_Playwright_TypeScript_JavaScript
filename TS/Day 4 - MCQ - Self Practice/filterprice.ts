type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  let username: string = "Aaryan";
  
  const products: Product[] = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
  ];
  
  function getAffordableProducts(maxPrice: number): Product[] {
    return products.filter(p => p.price <= maxPrice);
  }
  
  getAffordableProducts(100).forEach(p =>
    console.log(`ID: ${p.id}, Name: ${p.name}, Price: $${p.price}`)
  );
  