let str = "Welcome to JavaScript";
let str1 = "Hello!";
let str2 = "      You learn JavaScript";
str1 = str1.toLowerCase();
console.log(str1);
console.log(str.toUpperCase());

str2 = str2.trim();
console.log(str2);


//slice Method -> to display specific string
let a = "Computer Management";
a = a.slice(3,20);
console.log(a);

//concat method -> its use to merge two or more string 
let b = "Computer";
let b1 = " Management";

let res = b.concat(b1);//you can write different string than use also(string1 + string2)
console.log(res);

//replace method ->its replace character

let c = "Hellololo";
console.log(c.replaceAll("lo","p"));//replace ->used to replace only one character


//charAt -> find out the index character 
let d = "You Learn JavaScript";

console.log(d.charAt(8));