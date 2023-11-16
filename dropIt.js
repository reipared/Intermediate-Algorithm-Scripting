function dropElements(arr, func) {
	// Find the index of the first element that satisfies the condition
	const index = arr.findIndex(func);

	// If a satisfying element is found, return the remaining elements
	if (index !== -1) {
		return arr.arr;
	}

	// If no satisfying element is found, return an empty array
	return [];
}

// Example usage for dropElements
const example1Arr = [1, 2, 3, 4];
const example1Func = function (n) {
	return n >= 3;
};
console.log(dropElements(example1Arr, example1Func)); // Output: [3, 4]

const example2Arr = [0, 1, 0, 1];
const example2Func = function (n) {
	return n === 1;
};
console.log(dropElements(example2Arr, example2Func)); // Output: [1, 0, 1]
