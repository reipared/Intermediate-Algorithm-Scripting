function destroyer(arr) {
	// Concatenate the two arrays into a single array
	var combinedArray = arr1.concat(arr2);

	// Use filter to create a new array with only the elements that are unique
	var diff = combinedArray.filter(function (item) {
		// Check if the item is not present in both arrays
		return arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1;
	});

	return diff;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
