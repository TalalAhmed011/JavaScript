let use="tallal"
let age=23
let address="karachi pakistan"

console.log(`My Name is ${use} my age is ${age} and i live in ${address}`);

//=======================
const myname = new String("talal")
console.log(typeof(myname));
console.log(myname.toUpperCase());
console.log(myname.charAt(4));

//==========================
console.log("==============substriing=================");
let newString= myname.substring(0,3)
console.log(newString);


let new2String= myname.slice(0,4)
console.log(new2String);


//different methods of string
console.log("==============string methods=================");
let sample="   Hello World   "
console.log(sample.length);
console.log(sample.trim());
console.log(sample.toLowerCase());
console.log(sample.toUpperCase());
console.log(sample.includes("World"));
console.log(sample.startsWith("H"));
console.log(sample.endsWith("d   "));
console.log(sample.indexOf("o"));
console.log(sample.replace("World", "Everyone"));
console.log(sample.split(" "));
console.log(sample.repeat(3));
const url="https://www.google.com/search?"
console.log(url.concat("q=javascript"));
console.log(url.replace(/\./g,'+'))