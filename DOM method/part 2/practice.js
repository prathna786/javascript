let btn = document.createElement("button");
console.log(btn);
btn.innerText = "Click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);


//Q2:
let para = document.querySelector("p");
para.classList.add("newclass");//add more than one class