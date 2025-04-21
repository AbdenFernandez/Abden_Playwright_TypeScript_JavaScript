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
  
  const allUnder100 = products.every(p => p.price < 100);
  const anyUnder30 = products.some(p => p.price < 30);
  
  console.log(`Are all products under $100? ${allUnder100 ? "Yes" : "No"}`);
  console.log(`Is there any product under $30? ${anyUnder30 ? "Yes" : "No"}`);
  