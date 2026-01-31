// //getAttribute -> to get the value of node and display attribute value
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));//return the attribute value

// //setAttribute -> set attribute(class,id name change) value in run time
// let p1 = document.querySelector("p");
// console.log(p1.setAttribute("class","newClass"));

// let div1 = document.querySelector("div");
// console.log(div1);
// //style change in css and set property than convert the style like = color to set style color
// div1.style.backgroundColor = "purple";
// div1.style.fontSize = "normal";
// // div1.style.visibility = "hidden";
// div1.innerText = "Hello!";


//insert element :
let btn = document.createElement("button");
console.log(btn);
btn.innerText = "Click me!";
//screen display method:
//1.node.append -> add node in last
let div = document.querySelector("div");
div.append(btn);

//2.prepend -> add btn in first 
div.prepend(btn);

//3.before -> node before add btn
div.before(btn);

//4.after -> add btn after
div.after(btn);

let p1 = document.createElement("button");
console.log(p1);
p1.innerText = "Click";

let p2 = document.querySelector("p");
p2.after(p1);

let newheading = document.createElement("h1");
newheading.innerHTML = "<i>Hi, I'm new!</i>";

document.querySelector("body").prepend(newheading);
//node.remove -> used to delete any values