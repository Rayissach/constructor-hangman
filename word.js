var letter = require("./letter.js");
exports.letter;

function word(value){
	this.value = value;
	this.letter = [];
	this.guessesMade = "";
	for(var i = 0; i < this.letter.length; i++) {
		this.letter.push(new letter(this.value[i]));
	}
};

word.prototype.workDone = function(){
	for(var i = 0; i < this.letter.length; i++){
		if(!this.letter[i].show) return false;
	}
	return true;
}

word.prototype.letterCatch = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		return "Duplicate";
	} 
	this.guessesMade += lowerLetter; 
	for(var i=0; i<this.letter.length;i++){
		if(this.letter[i].value.toLowerCase() == lowerLetter){
		this.letter[i].show = true;
		}
	}
};

word.prototype.emptyString = function(){
  var output = "";
  for(var i=0; i<this.letter.length; i++){
    output += this.letter[i].printInfo();
  }
  return output;
}

module.exports = word;




