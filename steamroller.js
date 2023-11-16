function steamrollArray(arr) {
	let flattenedArray = [];

	function flatten(element) {
		if (Array.isArray(element)) {
			for (let i = 0; i < element.length; i++) {
				flatten(element[i]);
			}
		} else {
			flattenedArray.push(element);
		}
	}

	arr.forEach(flatten);

	return flattenedArray;
}
