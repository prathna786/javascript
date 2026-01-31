console.log("Hello");
// //diplay the property in document
// console.dir(window.document);
// //dir -> print method and property,object
// console.dir(document.body.childNodes[1]);
// console.log(document.head);
//class selecting is return the html collection 
let heading = document.getElementsByClassName("heading");
console.dir(heading);
let pragraph = document.getElementsByTagName("p");
console.log(pragraph);

//query selecotr return node and element 
let element = document.querySelector("p");
console.dir(element);
//tabname -> return tag name  
//innerText -> return inner text to the child node ->innerText="<any content you can change>"
//innerhtml -> return the html tags -> innerHtml = "<change tag in run time>"
console.dir("p");
//textcontent -> change the run time content and also use to display hidden elements

console.dir(document.body.firstChild);