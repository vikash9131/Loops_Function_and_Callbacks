//Loop

let sum = 0;
for(let i=0; i<=100; i++){
    sum = sum + i;
}

console.log(sum);

//function

function findSum(n){
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans = ans+i;
    }
    return ans;
}

let ans = findSum(100);
console.log(ans);

let ans2 = findSum(10);
console.log(ans2);