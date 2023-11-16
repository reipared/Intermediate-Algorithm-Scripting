function diffArray(arr1, arr2) {
	// Concatenate the two arrays into a single array
	var combinedArray = arr1.concat(arr2);

	// Use filter to create a new array with only the elements that are unique
	var diff = combinedArray.filter(function (item) {
		// Check if the item is not present in both arrays
		return arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1;
	});

	return diff;
}

// Examples
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Example usage:
var array1 = [1, 2, 3, 5];
var array2 = [1, 2, 3, 4, 5];

var result = diffArray(array1, array2);
console.log(result); // Output: [4]
