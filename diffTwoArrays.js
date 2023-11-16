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

// Example 1
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(diffArray(array1, array2));
// Output: [1, 2, 6, 7]

// Example 2
var fruits1 = ["apple", "orange", "banana"];
var fruits2 = ["orange", "banana", "grape"];
console.log(diffArray(fruits1, fruits2));
// Output: ["apple", "grape"]

// Example 3
var nums1 = [1, 2, 3];
var nums2 = [1, 2, 3];
console.log(diffArray(nums1, nums2));
// Output: []
