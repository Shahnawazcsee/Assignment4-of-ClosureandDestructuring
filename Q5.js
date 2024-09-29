function createCart() {
    const cart = []; // Private array to store cart items

    return {
        addToCart: function(product) {
            const existingItem = cart.find(item => item.productId === product.productId);
            if (existingItem) {
                // If item exists, increment the quantity
                existingItem.quantity += product.quantity;
                console.log(`${product.name} quantity updated to ${existingItem.quantity}.`);
            } else {
                // If item does not exist, add it to the cart
                cart.push(product);
                console.log(`${product.name} has been added to the cart.`);
            }
        },
        removeItem: function(productId) {
            const index = cart.findIndex(item => item.productId === productId);
            if (index !== -1) {
                const removedItem = cart.splice(index, 1); // Remove item from the cart
                console.log(`Product with ID ${productId} has been removed from the cart: ${removedItem[0].name}`);
            } else {
                console.log(`Product with ID ${productId} is not in the cart.`);
            }
        },
        getCartItems: function() {
            return cart.slice(); // Return a copy of the cart items
        },
        clearCart: function() {
            cart.length = 0; // Clear the cart
            console.log("The cart has been cleared.");
        }
    };
}

// Create an instance of the cart
const cart = createCart();

// Add items to the cart
cart.addToCart({ productId: 1, name: 'Laptop', quantity: 1, price: 1000 });
// Laptop has been added to the cart.
cart.addToCart({ productId: 2, name: 'Phone', quantity: 2, price: 500 });
// Phone has been added to the cart.
cart.addToCart({ productId: 1, name: 'Laptop', quantity: 1, price: 1000 });
// Laptop quantity updated to 2.

// Get items in the cart
console.log(cart.getCartItems()); 
// [{ productId: 1, name: 'Laptop', quantity: 2, price: 1000 }, { productId: 2, name: 'Phone', quantity: 2, price: 500 }]

// Remove an item from the cart
cart.removeItem(2); 
// Product with ID 2 has been removed from the cart: Phone
console.log(cart.getCartItems()); 
// [{ productId: 1, name: 'Laptop', quantity: 2, price: 1000 }]

// Attempt to remove a product not in the cart
cart.removeItem(3); 
// Product with ID 3 is not in the cart.

// Clear the cart
cart.clearCart(); 
// The cart has been cleared.
console.log(cart.getCartItems()); 
// []
