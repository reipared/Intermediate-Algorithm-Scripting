// Define the Person contrusctor function
const Person = function (first, last) {
	let firstName = first;
	let lastName = last;

	// Method to get the full name
	this.getFullName = function () {
		return `${firstName} ${lastName}`;
	};

	// Method to get the first name
	this.getFirstName = function () {
		return firstName;
	};

	// Method to get the last name
	this.getLastName = function () {
		return lastName;
	};

	// Method to set the first name
	this.setFirstName = function (first) {
		firstName = first;
	};

	// Method to set the last name
	this.setLastName = function (last) {
		lastName = last;
	};

	// Method to set both first and last names
	this.setFullName = function (first, last) {
		firstName = first;
		lastName = last;
	};
};

// Example usage:

// Create a new person instance
const person1 = new Person("John", "Doe");

// Get and log the initial full name
console.log("Initial Full Name:", person1.getFullName()); // Output: Initial Full Name: John Doe

// Get and log the initial first name
console.log("Initial First Name:", person1.getFirstName()); // Output: Initial First Name: John

// Get and log the initial last name
console.log("Initial Last Name:", person1.getLastName()); // Output: Initial Last Name: Doe

// Set a new first name and log the updated full name
person1.setFirstName("Jane");
console.log("Updated Full Name:", person1.getFullName()); // Output: Updated Full Name: Jane Doe

// Set a new last name and log the updated full name
person1.setLastName("Smith");
console.log("Updated Full Name:", person1.getFullName()); // Output: Updated Full Name: Jane Smith

// Set both first and last names and log the updated full name
person1.setFullName("Alice", "Johnson");
console.log("Updated Full Name:", person1.getFullName()); // Output: Updated Full Name: Alice Johnson
