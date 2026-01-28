let companies = ["Blooomberg","Microsoft","Uber","Google","IBM","Netflix"];

console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);