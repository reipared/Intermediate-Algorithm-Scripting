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

// Example
whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" },
	],
	{ last: "Capulet" }
);

// More Examples:
var collection = [
	{ name: "John", age: 30, gender: "male" },
	{ name: "Jane", age: 25, gender: "female" },
	{ name: "Bob", age: 35, gender: "male" },
];

var source = { age: 30, gender: "male" };

var result = whereforeArtThou(collection, source);
console.log(result);
// Output: [{ name: "John", age: 30, gender: "male" }]
