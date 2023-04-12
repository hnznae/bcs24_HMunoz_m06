function oddEvenChecker(number) {
	typeof(number) === 'number' ? number % 2 === 0 ? console.log("The number is even.") : console.log("The number is odd.") : console.log("Number is invalid.")
	
}

oddEvenChecker(10);
oddEvenChecker(11);
oddEvenChecker("A");

function budgetChecker(amount) {
	typeof(amount) === 'number' ? amount > 40000 ? console.log("You are over budget") : console.log("You have resources left.") : console.log("Input is invalid.")
}

budgetChecker(10000);
budgetChecker(40000);
budgetChecker(41000);
budgetChecker("Not");
