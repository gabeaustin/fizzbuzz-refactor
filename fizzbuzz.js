var runFizzBuzz = function(){
  var input = prompt("Enter in a number.");
  input = +input;
  fizzBuzz(input);
} 

var fizzBuzz = function(num){
  for (i = 0; i <= num; i++) {
    if (i%3 === 0 && i%5 === 0){
      alert('fizzbuzz');
    } else if (i%3 === 0) {
      alert('fizz'); 
    } else if (i%5 === 0) {
      alert('buzz');
    } else {
      alert(i);
    }
  }
};