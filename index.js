
var word = require("./word.js");
var Letter = require ("./letter.js")
var inquirer = require('inquirer');
var prompt = require('prompt');
var letterGuessed;
var sauces = ["Ranch", "Barbecque", "Siracha", "Sweet and Sour", "Ketchup", "Mustard", "Honey", "Mayonnaise", "Chili", "Vinegar", "Goddess"];
var randomChoice = Math.floor(Math.random() * sauces.length);
var randomSauces = sauces[randomChoice];
exports.letter;

var masterSauce = new word(randomSauces);
var maxGuesses = 10;

function startGame(){
	// console.log(masterSauce.toString());
	if (masterSauce.guessesMade.length >= maxGuesses){
		console.log("You're Out of guesses try your luck in the sauce once again.");
	return; 
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(arr){
            //Make sure the the input is a letter
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(arr);
                }
                
		}]).then(function(input){ 
				var letter = input.letter; 
				masterSauce.letterCatch(letter); 
					if(masterSauce.workDone()){ 
					console.log('Lit!! Your answer ' + letter.toString() + ' was correct!');
					// return letter.toString(); 
					} else if (masterSauce.workDone()) {
						console.log("heyyyyyy")
					}
				console.log('-------------------\n'); 
				console.log('You have ' + (maxGuesses - masterSauce.guessesMade.length) + ' guesses left.')
				startGame(); 
				}
  );
}

startGame(); 
