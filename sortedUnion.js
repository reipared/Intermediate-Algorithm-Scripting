function uniteUnique() {
  // Convert the arguments object to an array
  var args = Array.from(arguments);

  // Combine all the arrays into a single array
  var combinedArray = args.reduce(function(arr1, arr2) {
    // Use a Set to keep track of unique elements
    var uniqueSet = new Set(arr1);

    // Filter out elements that already exist in the set
    var filteredArr2.forEach(function(item) {
      uniqueSet.add(item);
    });

    // Convert the set back to an array
    return Array.from(uniqueSet);
  }, []);

  return combinedArray;
}
