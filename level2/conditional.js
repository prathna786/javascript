//conditional statement
let mode = "dark";
let color;
let age=25;


if(mode === "dark")
{
    color = "Black";
}
else if(mode === "blue")
{
        color = "blue";
}
else
{
    color = "White";
}
console.log(color);
//Ternary operator
console.log("Age = ",age);
let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result);