function sumPrimes(num) {
	// Helper function to check if a number is prime
	function isPrime(n) {
		if (n < 2) return false;
		for (let i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}

	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}

	return sum;
}

// Example usage:
console.log(sumPrimes(10)); // should return 17
console.log(sumFibs(1)); // should return a number
console.log(sumFibs(1000)); // should return 1785
console.log(sumFibs(4000000)); // should return 4613732
console.log(sumFibs(4)); // should return 5
console.log(sumFibs(75024)); // should return 60696
console.log(sumFibs(75025)); // should return 135721
