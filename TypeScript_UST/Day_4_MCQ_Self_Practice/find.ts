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
  
  function findProductByName(productName: string): Product | undefined {
    return products.find(p => p.name === productName);
  }
  
  const result = findProductByName("Bag");
  
  if (result) {
    console.log(`Found: ${result.name}, Price: $${result.price}`);
  } else {
    console.log("Product not found.");
  }
  