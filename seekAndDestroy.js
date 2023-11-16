function destroyer(arr) {
	// Convert the arguments object to an array, excluding the first element (arr)
	var args = Array.from(arguments).slice(1);

	// Use filter to create a new array with only the elements not present in args
	var result = arr.filter(function (element) {
		return args.indexOf(element) === -1;
	});

	return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
