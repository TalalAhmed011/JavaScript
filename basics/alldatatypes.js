//also js is dynamically typed bcz data type of value is determined at run time instead on the basis of value it holds,
//static is opposit in this we tell it on compile time(not js)
// how all the data stores in memory and how it will be acessed (on this basis there are two categories)
//Primitive data tyeps
//7 types : call by memory jb b hmm in ko access krty hyn to call by value hota hy 
//inki copy hmein di jati hy jismein changing hoti hyn
//we have access to copy and all changes are mase in copy instead of original
//string, boolean, number ,  null, undefined, symbol, BigInt\

//declaring variable
const number=1;
const score=100.01
const isLoggedin=true //boolean
const temp=null //hold no value empty
let email;//undefined (value to be assigned)
let id=Symbol("123")//unique
let anotherId = Symbol("123")//unique
console.log(id==anotherId);//false verified unique
let bigNumber=28346829n//bigInt
console.log(typeof(bigNumber));

    


//Non-Primitive(refrence type)
//array, function, objects

const heros=["quaid", "allama", "sirsyed"];
let myObj={
    name:"tallal",
    class:"cs",
    age:23                          //the think son curly braces are obj and inside an onj 
                                    // there is anything arrays , obj , func
}

//function stored in variable
const myFunction= function () {
    console.log("hello world");
}

console.log(typeof(myFunction));
console.log(typeof(heros));

console.log(typeof(myObj));