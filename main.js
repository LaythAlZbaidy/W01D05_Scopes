console.log(arrowTitle)
/* START CODE UNDER THIS LINE */


console.log("9999999999999999999999")


//Pulse Check

/*
Q1:
Create a global variable myFavoriteFood 
and return its value in the function's local scope.
*/

let myFavoriteFood1  =  "MANSAF"
let myFavoriteFood ="the value of `myFavoriteFood` variable"
// make sure that the variable is in the global scope

const favoriteFood = function () 
{
return myFavoriteFood
};

// favoriteFood(); // => the value of `myFavoriteFood` variable

//===========================================================


/*
Q2:
Create a function updateFavoriteFood 
that updates the value of myFavoriteFood
*/

const updateFavoriteFood = function (newValue) 
{
  // TODO: Your code here
  myFavoriteFood = newValue;
};

// updateFavoriteFood("Pizza");
// favoriteFood(); // => "Pizza"

//===========================================================


/*
Q3:
Use the following closure function to create two separate counters
*/

const createCounter = function ()
{
let counter = 0;
  
// this anonymous function is a closure function that has access to its own closure variable

return function () 
{
counter = counter + 1;
return counter ; 
};

}; 

const  count_1 = createCounter();
const  count_2 = createCounter();


//invoking//

//===========================================================


/* 
Q4: 
Modify createCounter to take a parameter that represents the starting point for the counter
*/
const createCounter_2 = function (start)
{

let counter = start 
return function ()

{

counter = counter + 1;
return counter;
};

}; 
let count_3 = createCounter_2(5);
let count_4 = createCounter_2(10);


//==========================================================
//===========================================================
//===========================================================


//Practice

/*
Q1:
Predict the value of the following variables and explain why.
*/

let age = 25;
if (true) 
{
age = 30;
} 

age; /////////// 30  

const myName = "John";
if (true) 
{

const myName = "Jane";
}

myName; ///////// John

//===========================================================



/*
Q2:
Predict the value of the following function invocations.
*/

let number = 10;
const func1 = function ()
 
{

let number = 15;
if (true)

{
    
let number = 24;

}

return number;
};

func1(); ////// 15   



const func2 = function (age)

{

age = 10;
if (true)
{

let age = 24;
age = 20;
}

return age; 

};
  
func2(26); /////<< 10 


//===========================================================


/*
Q3:
Write a function countDown that returns a number representing a count down value. 
With each invocation the number should be lower by one and at zero it will no longer decrement and instead it will return "count down is over".
*/

counter = 5;
const countDown = function () 

{
if(counter>0)
{

return --counter; 
}
else 
{

return "count down is over";
 
}
};
/*
countDown(); // => 4
countDown(); // => 3
countDown(); // => 2
countDown(); // => 1
countDown(); // => 0
countDown(); // => "count down is over"
//let Dec = 10;
*/

//===========================================================


/*
Q4:
Write a function countUp that should do the opposite of countDown.
With every invocation the count value should be incremented by one.
*/


const countUp  = function () 
{

return ++counter;
//countValue = countValue + 1;
};


/*
let Add =0
const countUp = function ()    
{ 
let Add = 0 
return function()
{
return ++Add
}

};
const a2 = countUp();
*/

//===========================================================


/*
Q5:
Write a function resetCount that accepts a number argument start.
and updates the count variable to equal the starting value 
and return a string implying that.
*/

const resetCount = function (start){

  counter=start ;
  return "the count has been reset"
// this anonymous function is a closure function that has access to its own closure variable  

};

/*
resetCount(0); // => "the count has been reset"
countUp(); // => 1
resetCount(10); // => "the count has been reset"
countUp(); // => 11
*/


//===========================================================


/*
Q6: 
Write a function addToList that accepts a string argument 
toDo and returns the current list as a string. Every time
we invoke the function it should return the old toDo 
item plus the new one.
*/

let list =" "
const addToList = function (toDo) 

{ 

list = list + " " + toDo ;
return list 

};


/*
addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'
*/



//===========================================================



/*
Q7:
Write a function createToDoList that works similarly to addToList function but instead of a global variable use a closure variable.
*/

const createToDoList = function ()
{
  let temp = ' '

  return function(a)

  {
    temp = temp +" "+a
  
    return temp
  
  }
};
const toDoListOne = createToDoList();


/*
toDoListOne("Eat"); // => 'Eat'
toDoListOne("Play"); // => 'Eat Play'
toDoListOne("Sleep"); // => 'Eat Play Sleep'
toDoListOne("repeat"); // => 'Eat Play Sleep repeat'
*/

//===========================================================

/*
Q8: 
Write a function deposit that accepts a number argument amount 
and returns the current account balance after depositing the amount.

*/
//let account_balance = 0
//balance_acount =100

balance_acount =0

const deposit = function (amount) 

{

balance_acount = balance_acount + amount;
return balance_acount;

}

//===========================================================


/*
Q9:
Write a function withdraw that accepts a number argument amount 
and returns the current account balance after withdrawing the amount.
*/

const withdraw = function (amount) 

{
if (balance_acount >= 0)
{

  balance_acount = balance_acount - amount;
return balance_acount;
}
else 
{
return "insufficient funds, current balance: "

}
}
/*
deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30
withdraw(100); // => "insufficient funds, current balance: 30"
*/




//===========================================================



/*
Q10:
Write a closure function createAccount that accepts a number argument
initialValue 

that represents the starting value of the account balance
and return a closure function with two parameters,
transactionType and amount that deposit or withdraw from the account balance depending on the transactionTypeand returns the total balance amount. Make sure to prevent transactions that withdraw more than the total balance.

***I don't know the solution after many attempts***

*///start_n = 0

/*
const createAccount = function (initialValue)

{

let start_n = initialValue

console.log(initialValue) 
return function (transactionType,amount)
{
if ((transactionType == "withdraw") && amount <=start_n)
{

start_n =start_n -amount
return start_n
}
else if (transactionType =="deposit"&& amount>=0)
{
  
return start_n =start_n +amount

}
else 
{
return "insufficient funds, current balance: "+amount 

}

}

}

const accountOne = createAccount(0)
const accountTwo = createAccount(500)

*/



const createAccount = function (initialValue)

{

balance_acount = initialValue

 //console.log(initialValue) 
return function (transactionType,amount )
{
if ((transactionType == "withdraw") && amount <=balance_acount)
{


return withdraw(amount)
}
else if (transactionType =="deposit"&& amount>=0)
{
  
return deposit(amount)
}
else 
{
return "insufficient funds, current balance: "+balance_acount 

}

}

}

const accountOne = createAccount(0)
//const accountTwo = createAccount(500)


/*
const accountOne = createAccount(0);
accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
accountOne("deposit", 50); // => 50
accountOne("deposit", 70); // => 120
accountOne("withdraw", 10); // => 110

const accountTwo = createAccount(500);
accountTwo("withdraw", 100); // => 400
accountTwo("withdraw", 100); // => 300
accountTwo("deposit", 50); // => 350
accountTwo("wit */



//==========================================================
//===========================================================
//===========================================================


//Extra practice 


/*
Q1 :
Write a function minMax that accepts a number argument number and returns a string representing the maximum and the minimum numbers. Read the comments for more information.
*/


// every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// both, and preserve the result for later invocations

 
let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
const minMax = function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
  return "the maximum number is: " + max + " and the minimum number is: " + min;
};






/*
minMax(5); // => "the maximum number is: 5 and the minimum number is 5"
minMax(2); // => "the maximum number is: 5 and the minimum number is 2"
minMax(3); // => "the maximum number is: 5 and the minimum number is 2"
minMax(7); // => "the maximum number is: 7 and the minimum number is 2"
minMax(0); // => "the maximum number is: 7 and the minimum number is 0"
*/

/* 
Q2 :
Modify the rockPaperScissors function from the previous lesson to save the score of how many times the user has won and how many the user has lost. Return the score with every invocation.
*/

// use your previous solution for `randomMove`

/*
const randomMove = function () {

  result = Math.floor(Math.random()*3)

  if (result == 0){
    return "rock"
    
  }
  if (result == 1){
    return "paper"
    
  }
  if (result == 2){
    return "scissors"
    
  }

};
*/
/*

let total_win = 0
let total_lost =0 

const rockPaperScissors_1= function (move) {

  const random = randomMove();
  console.log("move:" ,move)
  console.log("random:" ,random)

if(move === "rock" && random === "scissors"){

  total_win=total_win+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "rock"  && random === "paper"){

  total_lost = total_lost+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost

  }
else if(move === "paper"  && random === "rock"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "paper" && random === "scissors"){
    total_lost = total_lost+1

    return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "scissors"   && random === "paper"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "scissors"  && random === "rock"){
  total_lost = total_lost+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}else{
  return "invalid move";  
}
};
*/
/*
rockPaperScissors_1("rock"); // => "Won: 1, Lost:0"
rockPaperScissors_1("rock"); // => "Won: 1, Lost:1"
rockPaperScissors_1("paper"); // => "Won: 1, Lost:2"
*/



/*
Q3 : Modify the rockPaperScissors function to have a score limit such as winning five times then reset the score back to zero.
*/




/*


let total_win = 0
let total_lost =0 
let score_limit = 10 


const rockPaperScissors_2= function (move) {


if ((total_lost === score_limit) || (total_win==score_limit))

{
total_win=0
total_lost=0

}

  const random = randomMove();
  console.log("move:" ,move)
  console.log("random:" ,random)

if(move === "rock" && random === "scissors"){

  total_win=total_win+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "rock"  && random === "paper"){

  total_lost = total_lost+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost

  }
else if(move === "paper"  && random === "rock"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "paper" && random === "scissors"){
    total_lost = total_lost+1

    return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "scissors"   && random === "paper"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "scissors"  && random === "rock"){
  total_lost = total_lost+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}else{
  return "invalid move";
}

  
}

*/


/*
 Q4 : 
 Modify the rockPaperScissors function to have an optional second boolean parameter reset that when true will reset the game score back to zero.

*/

/*
const randomMove = function () {
  // gets a random number from 1-3
  const result  = Math.ceil(Math.random() * 3);

  if (result  === 1) {
    return "rock";
  } else if (result  === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let total_win = 0;
let total_lost = 0;
let score_limit = 10;

const rockPaperScissors = function (move, reset) {
  if (reset) {
    total_win = 0;
    total_lost = 0;
    return "the game has been reset";
  }

  if (total_win === score_limit || total_lost === score_limit) {
    total_win = 0;
    total_lost = 0;
  }

  const random = randomMove();
  console.log("move:" ,move)
  console.log("random:" ,random)

if(move === "rock" && random === "scissors"){

  total_win=total_win+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "rock"  && random === "paper"){

  total_lost = total_lost+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost

  }
else if(move === "paper"  && random === "rock"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "paper" && random === "scissors"){
    total_lost = total_lost+1

    return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "scissors"   && random === "paper"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "scissors"  && random === "rock"){
  total_lost = total_lost+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}else{
  return "invalid move";
  }
};*/

/*
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
rockPaperScissors("", true); // => "the game has been reset"
rockPaperScissors("scissors"); // => "Won: 0, Lost:1"
*/
/*
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
rockPaperScissors("", true); // => "the game has been reset"
rockPaperScissors("scissors"); // => "Won: 0, Lost:1"
*/






/*
Q5 :
Modify the rockPaperScissors function to keep track of the last winner and modify the randomMove function to have a 25% chance of picking the same move if the user have lost the previous round, otherwise it picks a random move.

*/


const randomMove = function () {
  // gets a random number from 1-3
  const result  = Math.round(Math.random() *2);

  if (result  === 0) {
    return "rock";
  } else if (result  === 1) {
    return "paper";
  } else if  (result == 2) {
    return "scissors";
  }
};

let total_win = 0;
let total_lost = 0;
let score_limit = 10;

const rockPaperScissors = function (move, reset) {


  if (reset) {
    total_win = 0;
    total_lost = 0;
    return "the game has been reset";
  }

  if (total_win === score_limit || total_lost === score_limit) {
    total_win = 0;
    total_lost = 0;
  }

  const random = randomMove();
  console.log("move:" ,move)
  console.log("random:" ,random)

if(move === "rock" && random === "scissors"){

  total_win=total_win+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "rock"  && random === "paper"){

  total_lost = total_lost+1
  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost

  }
else if(move === "paper"  && random === "rock"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "paper" && random === "scissors"){
    total_lost = total_lost+1

    return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
  }
else if(move === "scissors"   && random === "paper"){
  total_win=total_win+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}
else if(move === "scissors"  && random === "rock"){
  total_lost = total_lost+1

  return " win : "+move+" "+total_win+" lost : "+random+" "+total_lost
}else{
  return "invalid move";
  }
};



/*
rockPaperScissors("rock"); // => "Won: 0, Lost:1"
// lets assume that the same random move was picked because of the 25% chance
rockPaperScissors("rock"); // => "Won: 0, Lost:2"
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
*/