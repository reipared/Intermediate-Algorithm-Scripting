function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;

	const calculateOrbitalPeriod = function (avgAlt) {
		const semiMajorAxis = earthRadius + avgAlt;
		const orbitalPeriodInSeconds = Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM)
		);
		return orbitalPeriodInSeconds;
	};

	const resultArray = arr.map(function (obj) {
		const orbitalPeriodInSeconds = calculateOrbitalPeriod(obj.avgAlt);
		return { name: obj.name, orbitalPeriod: orbitalPeriodInSeconds };
	});

	return resultArray;
}

// Example usage:
const debrisArray = [
	{ name: "sputnik", avgAlt: 35873.5553 },
	{ name: "hubble", avgAlt: 556.7 },
	// Ad more elements as needed
];

console.log(orbitalPeriod(debrisArray));
// Output: [ { name: 'sputnik', orbitalPeriod: 86400 }, { name: 'hubble', orbitalPeriod: 5734 } ]
