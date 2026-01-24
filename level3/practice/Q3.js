let n = prompt("Enter Number:");
let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log("Array = ",arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
});
console.log(sum);