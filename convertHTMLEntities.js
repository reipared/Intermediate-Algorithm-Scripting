function convertHTML(str) {
	var htmlEntities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};

	return str.replace(/[&<>"']/g, function (match) {
		return htmlEntities[match];
	});
}

// Example usage:
console.log(convertHTML("Dolce & Gabbana"));
// should return "Dolce &amp; Gabbana"

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// should return "Hamburgers &lt; Pizza &lt; Tacos"

console.log(convertHTML("Sixty > twelve"));
// should return "Sixty &gt; twelve"

console.log(convertHTML('Stuff in "quotation marks"'));
// should return 'Stuff in &quot;quotation marks&quot;'

console.log(convertHTML("Schindler's List"));
// should return "Schindler&apos;s List"

console.log(convertHTML("<>"));
// should return "&lt;&gt;"

console.log(convertHTML("abc"));
// should return "abc"
