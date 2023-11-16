function truthCheck(collection, pre) {
	// Use every to check if all elements in the collection have truthy values for the specified property
	return collection.every(
		(obj) => obj.hasOwnProperty(pre) && Boolean(obj[pre])
	);
}

// Example usage:
const example1 = [
	{ name: "Tom", age: 25 },
	{ name: "Ray", age: 30 },
	{ name: "Jay", age: 35 },
];
console.log(truthCheck(example1, "age")); // Output: true

const example2 = [
	{ name: "Tom", age: 25 },
	{ name: "Ray", age: 30 },
	{ name: "Jay" },
];
console.log(truthCheck(example2, "age")); // Output: false
