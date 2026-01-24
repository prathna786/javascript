let arr = [1,2,3,4];
const output = arr.reduce((res,curr)=>{
    return res > curr ? res : curr;
});
console.log("Array = ",arr);
console.log("Max no = ",output);