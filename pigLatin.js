function translatePigLatin(str) {
	// Define an array of vowels
	var vowels = ["a", "e", "i", "o", "u"];

	// Check if there are no vowels in the word
	if (
		!str
			.toLowerCase()
			.split("")
			.some((char) => vowels.includes(char))
	) {
		return str + "ay"; // Handle words without vowels by adding "ay" at the end
	}

	// Check if the first letter is a vowel
	if (vowels.includes(str[0].toLowerCase())) {
		return str + "way";
	} else {
		// Find the index of the first vowel
		var firstVowelIndex = str
			.toLowerCase()
			.split("")
			.findIndex((char) => vowels.includes(char));

		// Move the consonant or cluster to the end and add "ay"
		return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
	}
}

translatePigLatin("consonant");
