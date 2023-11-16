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

whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" },
	],
	{ last: "Capulet" }
);
