let btn1 = document.querySelector("#btn");

btn1.onclick = () => {
    console.log("Button 1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
};

//set the event object /you can use all property object 
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

//Event listener -> it used to access multiple times
btn1.addEventListener("click",(evt) => {
    console.log("Again Button 1 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
});


const handler = () => {
    console.log("Button 1 was clicked - Handler");
};

btn1.addEventListener("click",handler);
//remove event listener
btn1.removeEventListener("click",handler);