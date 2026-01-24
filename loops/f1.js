for(let count=1; count<=5; count++)
{
    console.log("Welcome to JavaScript");
}
let j=1;
while(j<=5){
    console.log("value = ",j);
    j++;
}
let k=6;
do{
    console.log("Value2 = ",k);
    k++;
}while(k<=10);
let str = "Hello!";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("Size of String = ",size);
let student ={
    name:"Rahul Kumar",
    age:28,
    cgpa:7.5,
    isPass:true,
};
for(let key in student){
    console.log("Key = ",key,"value",student[key]);
}