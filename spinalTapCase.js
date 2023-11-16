function spinalCase(str) {
	// Replace spaces and underscores with dashes
	str = str.replace(/\s|_/g, "-");

	// Use regex to insert dashes between camelCase letters
	str = str.replace(/([a-z])([A-Z])/g, "$1-$2");

	// Convert the string to lowercase
	return str.toLowerCase();
}

// Example 1
var result1 = spinalCase("This is Spinal Tap");
console.log(result1);
// Output: "this-is-spinal-tap"

// Example 2
var result2 = spinalCase("The_World_is_Yours");
console.log(result2);
// Output: "the-world-is-yours"

// Example 3
var result3 = spinalCase("AllThe-small_THINGS");
console.log(result3);
// Output: "all-the-small-things"
