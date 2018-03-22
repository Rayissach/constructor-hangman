var inquirer = require('inquirer');
var prompt = require('prompt');

function letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
}

letter.prototype.printInfo = function() {
	if (this.show) {
		return this.value;
	}
	return "_ ";
}

module.exports = letter;


// this.value == "_"

// if guessed return false

// function goHead (value) {
// 	if (this.value === " ") {
// 		console.log("yea")
// 		rl.write( "")
// 	}
// }

// goHead();

