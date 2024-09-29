// Sample customer order object
let order = {
    orderId: "123456",
    productName: 'Laptop',
    quantity: 2
};

// Destructuring to extract properties
const { orderId, productName, quantity } = order;

// Print the extracted properties
console.log(`Order ID: ${orderId}`);
console.log(`Product Name: ${productName}`);
console.log(`Quantity: ${quantity}`);
