function destroyer(arr) {
	// Convert the arguments object to an array, excluding the first element (arr)
	var args = Array.from(arguments).slice(1);

	// Use filter to create a new array with only the elements not present in args
	var result = arr.filter(function (element) {
		return args.indexOf(element) === -1;
	});

	return result;
}

// Example 1
var result1 = destroyer([1, 2, 3, 4, 5], 2, 3);
console.log(result1);
// Output: [1, 4, 5]

// Example 2
var result2 = destroyer(
	["apple", "orange", "banana", "kiwi"],
	"orange",
	"kiwi"
);
console.log(result2);
// Output: ["apple", "banana"]

// Example 3
var result3 = destroyer([1, 2, 3, 4, 5, 6, 7, 8], 3, 5, 7);
console.log(result3);
// Output: [1, 2, 4, 6, 8]
