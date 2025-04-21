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

// Map to get only names
const productNames = products.map(p => p.name);

console.log("Product Names:", productNames);
