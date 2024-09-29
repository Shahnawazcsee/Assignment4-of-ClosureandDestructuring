function createCart() {
    const cart = []; // Private array to store cart items

    return {
        addItem: function(item) {
            cart.push(item); // Add item to the cart
            console.log(`${item} has been added to the cart.`);
        },
        removeItem: function(item) {
            const index = cart.indexOf(item);
            if (index !== -1) {
                cart.splice(index, 1); // Remove item from the cart
                console.log(`${item} has been removed from the cart.`);
            } else {
                console.log(`${item} is not in the cart.`);
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
cart.addItem('Laptop');   // Laptop has been added to the cart.
cart.addItem('Phone');    // Phone has been added to the cart.
cart.addItem('Headphones'); // Headphones has been added to the cart.

// Get items in the cart
console.log(cart.getCartItems()); // ['Laptop', 'Phone', 'Headphones']

// Remove an item from the cart
cart.removeItem('Phone'); // Phone has been removed from the cart.
console.log(cart.getCartItems()); // ['Laptop', 'Headphones']

// Clear the cart
cart.clearCart(); // The cart has been cleared.
console.log(cart.getCartItems()); // []
