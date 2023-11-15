function sumAll(arr) {
	// Find the minimum and maximum values in the array
	var min = Math.min(arr[0], arr[1]);
	var max = Math.max(arr[0], arr[1]);

	// Initialize the sum
	var sum = 0;

	// Iterate through the range and add each number to the sum
	for (var i = min; i <= max; i++) {
		sum += i;
	}

	// Return the final sum
	return sum;
}

// Example usage
var result = sumAll([1, 4]);
console.log(result); // Output 10
