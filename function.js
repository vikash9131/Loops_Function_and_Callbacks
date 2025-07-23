// calculate the sum from 1 to n
const readline = require("readline");
const sumFunctions = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

sumFunctions.question("Enter your number = ",function(n){
    n = Number(n);
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum = sum +i;
    }
    console.log(sum);
    sumFunctions.close();
})


const readline = require("readline");

const sumFunction = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function square(n){
    return n*n;
}

function squareFunction(a,b){
    let value1 = square(a);
    let value2 = square(b);

    return value1 + value2;
    
}

 sumFunction.question("Enter your number = " ,function(input){
    let [a,b] = input.split(" ").map(Number);
    console.log(squareFunction(a,b));
    sumFunction.close();
 })

//callback function

 function square(n){
    return n*n;
 }

 function cube(n){
    return n*n*n;
 }

 function squareSumFunction(a,b,callback){
    let value1 =callback(a);
    let value2 = callback(b);

    return value1+value2;
 }


 console.log(squareSumFunction(5,4,square));
 
 // Anonymuos function

