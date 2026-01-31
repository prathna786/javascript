let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from JavaScript learning";

let divs = document.querySelectorAll(".box");
console.log(divs);
let idx = 1;
for(div of divs){
    div.innerText = `New unique value ${idx}`;
    idx++;
}