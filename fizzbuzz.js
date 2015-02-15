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

// document.write will print the user's response 
// to the screen.
// I think this may complete some of the task:
// var runFizzBuzz = function(){
//   var input = prompt("Enter in a number.");
  
//   if (isNaN(input) || input % 1 !=0) {
//     document.write("This is not a valid number.  Please supply a valid number.");
//   } else {
//     document.write("This is a number.");
//   }
  
//   input = +input;
//   fizzBuzz(input);
// };