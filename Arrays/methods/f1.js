let items = ["Keyboard","Monitor","Mouse"];
console.log(items);

//push method -> add to end of the array 
items.push("Mousepad");
console.log(items);

//pop method -> to remove at the end of the array 
let i1 = items.pop();
console.log(items);
console.log("Deleted item = ",i1);

//toString method -> to print array in string form
console.log(items.toString());

//concat method -> Combine two array in one array
let marvels = ["Thor","Spiderman","Ironman","Antman","Dr.Strange"];
let marvels2 = ["Superman","Batman"];

let heros = marvels.concat(marvels2);
console.log(heros);

//unshift method -> add to start in array  
//shift method -> deleted to start in array 

//slice method -> return specific array value & not change original array 
//slice(starting value,ending value)
console.log(marvels.slice(1,5));

//splice method -> change original array & add,remove,replace array value for permentally
// splice(add,remove,replace)
let a = [1,2,3,4,5,6];
console.log(a);
a.splice(2,0,101,102);
console.log(a);

 

