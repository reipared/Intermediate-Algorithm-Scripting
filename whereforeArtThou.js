function whereforeArtThou(collection, source) {
	// Filter the collection based on the key-value pairs in the source object
	return collection.filter(function (item) {
		for (var key in source) {
			// Check if the key-value pairs match
			if (item[key] !== source[key]) {
				return false;
			}
		}
		return true;
	});
}

// Example 1
var result1 = whereforeArtThou(
	[
		{ name: "John", age: 30, city: "New York" },
		{ name: "Jane", age: 25, city: "San Francisco" },
		{ name: "Bob", age: 40, city: "Los Angeles" },
	],
	{ age: 25, city: "San Francisco" }
);
console.log(result1);
// Output: [ { name: 'Jane', age: 25, city: 'San Francisco' } ]

// Example 2
var result2 = whereforeArtThou(
	[
		{ brand: "Apple", model: "iPhone", color: "Silver" },
		{ brand: "Samsung", model: "Galaxy", color: "Black" },
		{ brand: "Google", model: "Pixel", color: "White" },
	],
	{ model: "iPhone", color: "Silver" }
);
console.log(result2);
// Output: [ { brand: 'Apple', model: 'iPhone', color: 'Silver' } ]

// Example 3
var result3 = whereforeArtThou(
	[
		{ name: "Alice", occupation: "Engineer", location: "Seattle" },
		{ name: "Bob", occupation: "Teacher", location: "New York" },
		{ name: "Charlie", occupation: "Doctor", location: "Los Angeles" },
	],
	{ occupation: "Doctor", location: "Los Angeles" }
);
console.log(result3);
// Output: [ { name: 'Charlie', occupation: 'Doctor', location: 'Los Angeles' } ]
