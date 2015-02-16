
var runFizzBuzz = function(){
	var input = prompt("Enter in a number.");
	input = +input;
	while (input === NaN || input % 1 != 0) {
		var input = prompt("That was not a number, please enter a number.")
	};
	fizzBuzz(input);
}	

var fizzBuzz = function(num){
	for (i = 0; i <= num; i++) {
		if (i%3 === 0 && i%5 === 0){
			document.write('fizzbuzz');
		} else if (i%3 === 0) {
			document.write('fizz'); 
		} else if (i%5 === 0) {
			document.write('buzz');
		} else {
			document.write(i);
		}
	}
};
