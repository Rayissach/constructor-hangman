
var wordJS = require("./word.js");
var letterJS = require("./letter.js");
var inquirer = require("inquirer");
var letterGuessed;
var sauces = ["Ranch", "Barbecque", "Siracha", "Sweet and Sour", "Ketchup", "Mustard", "Honey", "Mayonnaise", "Chili", "Vinegar", "Goddess"];
var randomChoice = Math.floor(Math.random() * sauces.length);
var randomSauces = sauces[randomChoice];
exports.LetterIn;

var masterSauce = new Word(randomSauces);
var maxGuesses = 10;

function startGame(){
	console.log(masterSauce.toString());
	if (masterSauce.guessesMade.length >= maxGuesses){
		console.log("You're Out of guesses try your luck in the sauce once again.");
	return; 
	}
	inquirer.prompt([{
		name: 'LetterIn',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(arr){

			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(arr);
				}
		}]).then(function(input){ 
				var letterIn = input.LetterIn; 
				masterSauce.findLetter(LetterIn); 
					if(masterSauce.workDown()){ 
					console.log('Lit!! Your answer ' + masterSauce.toString() + 'was correct!');
					return; 
					}
				console.log('-------------------\n'); 
				console.log('You have ' + (maxGuesses - masterSauce.guessesMade.length) + ' guesses left.')
				startGame(); 
				}
  );
}

startGame(); 