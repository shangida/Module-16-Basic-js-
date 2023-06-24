var firstName ="Shangida";
var lastName =" Akter"
var fullName =firstName + lastName;
// console.log(fullName);

// convarsion praseInt & + oparetory use
var price1 = "20"
//console.log(price1);
var price2 = 15
var price1 = parseInt(price1);
//console.log(price1 + price2);

//concatation use
var firstName  = " Shangida"
var lastName = " Khatun"
var fullName  = firstName + lastName
var age = 25;
var detials = "My name is" + firstName + lastName
// console.log(detials);
// console.log("I am a student");
// console.log("I am " + age + " years old")

//Division oparetor
var mango = 55;
var persons = 10;
var eachPersons = mango / persons
//console.log(eachPersons);
// vagfol ber korar rule
//console.log(mango %  persons);

// problem-1 slove strats
var giveMoney = 1000;
var orangesPrice = 400;
var applePrice  = 300;
var totalCost  = orangesPrice + applePrice;
var retunMoney = giveMoney - totalCost;

console.log("(problem-1) The will retun money " + retunMoney + " TK")

// problem-1 slove ends

//problem 2 slove strats
var math = 75;
var biology = 25;
var chemistry = 65;
var  physics = 80;
var bangla = 35.45
var  english = 99.50;
var  sum = math + biology + chemistry + physics + bangla + english;
var avg = sum/6;

console.log("(problem-2) The average marks is " + avg.toFixed(2));

//problem 2 slove ends

//problem-3  slove strats
var string1 ="I am going to be "
var string2 = "an awsome web developer"

console.log("((problem-3) " + string1 + string2)
//problem-3  slove ends

// problem-4 slove strats
var math = 119;
var remainder = math % 5;

console.log("(probe-4) " + "The remainder is " + remainder );
// problem-4 slove ends

//Task-1 strats
// var firstName = prompt("Enter your full name : ");
// var lastName = prompt("Enter your  last name : ");
// var fullname = firstName + lastName;

// document.write("Print the fullname " + fullName + "</br>");
// document.write("Total lenght of full name : " + fullName.length + "</br>");
// document.write("Cnvert full name into uppercase : " + fullName.toUpperCase() + "</br>");
// document.write("Print the 2nd position for full name : " + fullName.charAt(2) + "</br>")

//Task-1 ends

//Task-2 strats
var firstNumber = prompt("Enter your first number : ");
var secondNumber =  prompt("Enter your second number : ")

//convert number
firstNumber = parseInt(firstNumber);
secondNumber  = parseInt(secondNumber);

var sum = firstNumber + secondNumber;
var sub = firstNumber - secondNumber;
var mul = firstNumber * secondNumber;
var div = firstNumber / secondNumber;
var remainder = firstNumber % secondNumber;

document.write(firstNumber + " +" + secondNumber + " = " + sum + "</br>");
document.write(firstNumber + " -" + secondNumber + " = " + sub + "</br>");
document.write(firstNumber + " * " + secondNumber + " = " + mul + "</br>");
document.write(firstNumber + " / " + secondNumber + " = " + div + "</br>");
document.write(firstNumber + " % " + secondNumber + " = " + remainder + "</br>");

//Task-2 ends