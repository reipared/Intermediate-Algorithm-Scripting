function binaryAgent(str) {
	// Split the binary string into an array of binary values
	const binaryArray = str.split(" ");

	// Convert each binary value to its decimal equivalent and then to the corresponding ASCII character
	const asciiArray = binaryArray.map((binary) =>
		String.fromCharCode(parseInt(binary, 2))
	);

	// Join the ASCII characters to form the final sentence
	const sentence = asciiArray.join("");

	return sentence;
}

// Example usage for binaryAgent:
const example1Binary =
	"01001001 01101110 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01100111 01101001 01101110 01101110 01101001 01101110 01100111 01110011";
console.log(binaryAgent(example1Binary));
// Output: "In the beginning"

const example2Binary =
	"01001000 01100101 01101100 01101100 01101111 00101100 00100000 01110111 01101111 01110010 01101100 01100100 00100001";
console.log(binaryAgent(example2Binary));
// Output: "Hello, world!"
