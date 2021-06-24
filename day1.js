/// x=10,y=3 what is x+y
// 1) variable -(string)
var name="Desmond";
console. log(name);
var message="Hello "+name;
console. log(message);

//2) Variable -Number
var a = 10;
var b = 3;
var sum = a + b;
console. log(sum)

var minus = a -b;
console. log(minus)

var multiply = a * b;
console. log(multiply)

var division = a / b;
console. log(division)

var modulo = a % b;
console. log(modulo)

//3) boolean
var hungry = true;
var tired = false;
// OR and AND
console. log (hungry && tired);//AND need to be
console. log (hungry || tired);
console. log (!hungry);

//4) conditional if and else
var age = 15;
if (age < 18){
console. log("You cannot watch movie");
}
else {console. log("You may watch the movie");}
if (age < 13){console. log("you cannot the movie");}
else if (age < 18){console. log("You can watch this movie with parents");}
else {console. log("You may watch the movie");}

var number = 28;
if (number % 2 == 0 ){console.log(number+ " is an even number");}
else {console.log(number+ " is an odd number");}

var passengerAge =49;
var oriPrice =100;
if (passengerAge < 18){var finalPrice = 0.5 * oriPrice;
console.log("final price is RM" +finalPrice);}

else if(passengerAge < 40){console.log("final price is RM" +oriPrice);}

else if(passengerAge < 65){var finalPrice = 0.75 * oriPrice;
console.log("final price is RM" +finalPrice);}

else {console.log("fnal price is RM" + 0.5 *oriPrice);}

//loop
for (var i=1;i <10; i++){console.log(i);}
//the  reverse
for (var i=10;i >0;i--){console.log(i);}

//multiplication
var multiplier=4
var lines=15
for ( i = 1; i <= lines; i++){console.log(i+ " x "+multiplier+ "="+ i*multiplier);}
