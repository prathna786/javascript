let n = prompt("Enter number:");
let arr = [];

for(let i=1; i<=n; i++)
{
    arr[i-1] = i;
}
console.log("Product = ",arr);
let factorial = arr.reduce((res,curr) => {
    return res*curr;
});
console.log("Factorial = ",factorial);