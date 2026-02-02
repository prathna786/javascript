let modebtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");
//let button = document.querySelector("button");

modebtn.addEventListener("click",() => {
    if(currmode === "light"){
        currmode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});

