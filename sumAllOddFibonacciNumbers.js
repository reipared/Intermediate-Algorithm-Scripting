function sumFibs(num) {
	let prev = 0;
	let curr = 1;
	let sum = 0;

	while (curr <= num) {
		if (curr % 2 !== 0) {
			sum += curr;
		}

		const temp = curr;
		curr = prev + curr;
		prev = temp;
	}

	return sum;
}

// Example usage:
console.log(sumFibs(1)); // should return a number
console.log(sumFibs(1000)); // should return 1785
console.log(sumFibs(4000000)); // should return 4613732
console.log(sumFibs(4)); // should return 5
console.log(sumFibs(75024)); // should return 60696
console.log(sumFibs(75025)); // should return 135721
