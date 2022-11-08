// Add your Javascript codes here
let age = prompt("enter age");
const priceTag = 5000;

if (age < 15) {
 let disc80 = 80/100;
 let discount80 = disc80 * priceTag;
 alert( `Hello, you have been granted a discount of ${discount80}Naira and it's new price is ${priceTag - discount80} Naira`);
}

if (age < 18 ){
 let disc50 = 50/100;
 let discount50 = disc50 * priceTag;
 alert(`Hello, you have been granted a discount of ${discount50}Naira and it's new price is ${priceTag - discount50}Naira` ); 
}

if (age < 30){
  let disc40 = 40/100;
  let discount40 = disc40 * priceTag;
  alert(`Hello, you have been granted a discount of ${discount40}Naira and its new price is ${priceTag - discount40}Naira `);
}

if (age < 45){
    let disc30 = 30/100;
    let discount30 = disc30 * priceTag;
    alert(`Hello, you have been granted a discount of ${discount30}Naira and its new price is ${priceTag - discount30}`);
}
if (age < 65){
    let disc20 = 20/100;
    let discount20 = disc20 * priceTag;
    alert(`Hello, you have been granted a discont of ${discount20}Naira and its new price is ${priceTag - discount20}  `) ;
}
if (age > 65){
    let disc100 = 100/100;
    let discount100 = disc100 * priceTag;
    alert(`Hello, you have been granted a discount of ${discount100}Naira and its new price is ${priceTag - discount100}Naira `);
}
