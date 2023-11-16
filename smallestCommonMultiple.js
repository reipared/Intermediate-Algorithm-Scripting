function smallestCommons(arr) {
	// Function to calculate the GCD of two numbers using the Euclidean algorithm
	function gcd(a, b) {
		while (b !== 0) {
			const temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}

	// Function to calculate the LCM of two numbers
	function lcm(a, b) {
		return (a * b) / gcd(a, b);
	}

	// Calculate the LCM for the range specified in the input array
	let multiple = arr[0];
	for (let i = arr[0] + 1; i <= arr[1]; i++) {
		multiple = lcm(multiple, i);
	}

	return multiple;
}

// Example 1
var result1 = smallestCommons([1, 5]);
console.log(result1);
// Output: 60

// Example 2
var result2 = smallestCommons([5, 10]);
console.log(result2);
// Output: 2520

// Example 3
var result3 = smallestCommons([2, 7]);
console.log(result3);
// Output: 420
