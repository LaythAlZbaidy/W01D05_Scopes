console.log(arrowTitle)
/* START CODE UNDER THIS LINE */





//Pulse Check

//Q1 : Create a global variable myFavoriteFood and return its value in the function's local scope. 


// make sure that the variable is in the global scope


let myFavoriteFood1  =  "MANSAF"

myFavoriteFood ="the value of `myFavoriteFood` variable"


const favoriteFood = function () 

{

return myFavoriteFood

};




//favoriteFood(); // => the value of `myFavoriteFood` variable


//Q2 : Create a function updateFavoriteFood that updates the value of myFavoriteFood

const updateFavoriteFood = function (newValue)

{
    
myFavoriteFood1 =newValue

return  myFavoriteFood1

};
  
//updateFavoriteFood("Pizza");
//favoriteFood(); // => "Pizza"

//Q3 : Use the following closure function to create two separate counters


const createCounter = function ()

{

let counter = 0;
  
// this anonymous function is a closure function that has access to its own closure variable

return function ()
    
{

return ++counter; 

};

}; 

const  counterfirst = createCounter();
const  countersecond = createCounter();

//invoking


// Q4 : Modify createCounter to take a parameter that represents the starting point for the counter
var START = 0
//let START = 0
const createCounter2 = function (START)

{
   
// this anonymous function is a closure function that has access to its own closure variable
return function (START)
  
{

let counter = START 
return ++counter; 

};

}; 

var counterfirst2 = createCounter2();
//let  countersecond2 = createCounter2();




//Practice
//Q1 : Predict the value of the following variables and explain why.


let age = 25;
if (true) 
{
age = 30; 

}
age; /////////// 30 <<<< Because  Age changed to 30 The last stored value is age is 30 

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; ///////// John<<<<< Because myNamemy is const "John" The value is already defined



//Q2 : Predict the value of the following function invocations.

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

func1(); ////// 15   Because the number is defined twice, we take the first value and ignore the other


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
  
func2(26); /////<< 10 Because he knew his age  let age = 24; after giving him his value before that



//Q3:Write a function countDown that returns a number representing a count down value. With each invocation the number should be lower by one and at zero it will no longer decrement and instead it will return "count down is over".


counter = 5;
const countDown = function () 
{

  if(counter>0)
  {
  return --counter 
  }
  else 
  {

    return "count down is over"
 

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
/*
const countDown = function ()

{

let Dec = 10;

return function ()
    
{

if(Dec<=0)

{

console.log("count down is over")

}

else 

{

return --Dec; 

}

};

}; 
const  a1 = countDown();
*/
  
  /*
  countDown(); // => 4
  countDown(); // => 3
  countDown(); // => 2
  countDown(); // => 1
  countDown(); // => 0
  countDown(); // => "count down is over"
  
*/

//Q4 : Write a function countUp that should do the opposite of countDown. With every invocation the count value should be incremented by one.




const countUp  = function () 
{

return counter ++

};


/*
//let Add =0
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


//Q5 :  Write a function resetCount that accepts a number argument start and updates the count variable to equal the starting value and return a string implying that.
// ***I don't know the solution after many attempts***


const resetCount = function (Rstart)

{
  counter=Rstart 
  return "the count has been reset"
// this anonymous function is a closure function that has access to its own closure variable  
{

  
};

}; 

//const laythooth = resetCount
    



  

//if (start===start)



// Q6: Write a function addToList that accepts a string argument toDo and returns the current list as a string. Every time we invoke the function it should return the old toDo item plus the new one.
// ***I don't know the solution after many attempts***


let list=0
const addToList = function (toDo)

{

let list = toDo

return function()

{
    
return list+" "

}

};

const layth = addToList();



//Q7 : Write a function createToDoList that works similarly to addToList function but instead of a global variable use a closure variable.
// ***I don't know the solution after many attempts***


const createToDoList = function () 

{

};
  /*
  const toDoListOne = createToDoList();
  toDoListOne("Eat"); // => 'Eat'
  toDoListOne("Play"); // => 'Eat Play'
  toDoListOne("Sleep"); // => 'Eat Play Sleep'
  toDoListOne("repeat"); // => 'Eat Play Sleep repeat'

*/



//Q8 : Write a function deposit that accepts a number argument amount and returns the current account balance after depositing the amount.
//// ***I don't know the solution after many attempts***


let input = 0
const deposit = function (amount)
{

input = amount
return function ()
{

return Input+amount
}

};
  
const q = deposit();


  //deposit(100); // => 100
  //deposit(50); // => 150




//Q9 : Write a function withdraw that accepts a number argument amount and returns the current account balance after withdrawing the amount.
////// ***I don't know the solution after many attempts***

const withdraw = function (amount) 
{

    input = amount
    return function ()
    {
    
    return Input-amount
    }
    
    };
      
    var D = deposit();
  
  deposit(100); // => 100
  deposit(50); // => 150
  withdraw(70); // => 80
  deposit(50); // => 130
  withdraw(100); // => 30
  withdraw(100); // => "insufficient funds, current balance: 30"

/*
//Q10: Write a closure function createAccount that accepts a number argument initialValue that represents the starting value of the account balance and return a closure function with two parameters, transactionType and amount that deposit or withdraw from the account balance depending on the transactionTypeand returns the total balance amount. Make sure to prevent transactions that withdraw more than the total balance.
const createAccount = function (initialValue) {
    // TODO: Your code here
  };
  
  const accountOne = createAccount(0);
  accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
  accountOne("deposit", 50); // => 50
  accountOne("deposit", 70); // => 120
  accountOne("withdraw", 10); // => 110
  
  const accountTwo = createAccount(500);
  accountTwo("withdraw", 100); // => 400
  accountTwo("withdraw", 100); // => 300
  accountTwo("deposit", 50); // => 350
  accountTwo("withdraw", 500); // => "insufficient funds, current balance: 350"*/