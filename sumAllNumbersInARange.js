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

// Example 1
var result1 = sumAll([1, 4]);
console.log(result1);
// Output: 10

// Example 2
var result2 = sumAll([5, 10]);
console.log(result2);
// Output: 45

// Example 3
var result3 = sumAll([2, 7]);
console.log(result3);
// Output: 27
