let items = [250,645,300,900,50];
console.log("Before offer Apply = ",items);
// let i=0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }

for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log("After offer Apply = ",items);