// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set("home", "510-867-5309");
phoneNumbers.set("mobile", "415-555-1212");
phoneNumbers.set("business", "415-123-4567");

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function displayInfo(accountHolder, accountNumber,businessName) {
	console.log(`Account Holder Name: ${accountHolder}`);
	console.log(`Account Number: ${accountNumber}`);
	console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
	console.log('Addresses:');
	for (let address of addresses) {
		console.log(address);
	}
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers) {
	console.log('Phone Numbers:');
	for (let phone of phoneNumbers) {
		console.log(`${phone[0]}: ${phone[1]}`);
	}
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
	transactions.set(date, amount);
}

// Use the function to add transactions
addTransaction("May-2", -500);
addTransaction("May-13", 1200);
addTransaction("May-15", -100);
addTransaction("May-21", -359);
addTransaction("May-29", 2200);

// Add function to show balance status
function showBalanceStatus(amount) {
	console.log(`Balance: ${amount}`);

	if (amount < 0) {
		console.log("YOU ARE OVERDRAWN");
	}
	else if (amount < 20) {
		console.log("Warning: You are close to zero balance");
	}
	else {
		console.log("Thank you for your business.");
	}
}

// Add function to show transactions
function showTransaction(map, balance) {
	// print starting balance

	console.log(`Beginning balance: ${balance}`);
	console.log();
	// print date, type, amount charged and balance
	for (let transaction of transactions) {
		console.log(transaction[0]);
		if (transaction[1] < 0) {
			console.log("withdrawl");
		}
		else {
			console.log("deposit");
		}
		console.log(balance += transaction[1]);
		console.log();
	}

	showBalanceStatus(balance);

	if (balance < 0) {
		balance -= 25;
		console.log("You've been charged a one-time $25 fee.");
		console.log(`Balance: ${balance}`);
	}

}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
	"account holder": accountHolder,
	"account number": accountNumber,
	"business name": businessName,
	"addresses": addresses,
	"phone numbers": phoneNumbers,
	"transactions": transactions,
	"starting balance": 26000
};

// Function to add customer attributes
function addCustProperty(melonType = "Cantaloupe", numOfPets = 0) {
	customer["melon"] = melonType;
	customer["num pets"] = numOfPets;
}

// Add attributes for this user
addCustProperty("Casaba", 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




