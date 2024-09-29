function createCounter() {
    let count = 0; // Private variable to store the count

    return {
        increment: function() {
            count++; // Increment the count
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--; // Decrement the count
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count; // Return the current count
        }
    };
}

// Create an instance of the counter
const counter = createCounter();

// Simulate button clicks
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(`Current Count: ${counter.getCount()}`); // Current Count: 1
