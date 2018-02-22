var inquirer = require("inquirer");
var fs = require("fs");

function Letter(character) {
	this.character = "";
	this.appear = false;
	this.doWork = function () {
		if(this.character) {

		} else if (this.appear) {
			return this.character;
		}
		return "_";
	}
	console.log("hello");
} 

console.log(Letter);



module.exports = Letter;