// ************Assignment 3 : Company product catalog******************
// Task: Create a program to represent a product catalog using an array and perform basic queries.
interface products{
    name:string;
    model?:number;
    quantity:number,
};
// 1. Define an array named inventory to store product information.
let inventory: products[]=[];
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
const product1:products={
    name:"Civic",
    model:2023,
    quantity:1,
};
const product2: products={
    name: "Vivo_Mobile",
    model: 2024,
    quantity: 3,
};
const product3: products={
    name: "Lux",
    quantity: 2,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1,product2,product3);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
console.log(`the quntity of product3 is: ${product3.quantity}`);
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.
const product4: products={
    name:"Laptop",
    model:2022,
    quantity:2,
};
inventory.push(product4);
console.log(inventory);

