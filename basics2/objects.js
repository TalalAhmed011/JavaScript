//two ways literals and constructors
//literals declared not singleton
//constructor declared singlton
Object.create//contructor way

//object literals

//symbols interview base
const mys = Symbol("key1")
const mys1 = Symbol("key2")

const js={}//object
const my={
    name:"tallal",//keys and values
    age: 28,
    email:"talal123@gmail.com",
    city: "mzd",
    "fullname": "Tallal Ahmed",
    "full name": "tallall",
    mys:"key1",
    [mys1]:"key2"

}
//now there are two methods on is access through the . method second is [""] let us do
// console.log(my.name, my.email, my.city, my.fullname)
// console.log(my["name"],["age","city"])//couldnt do that bzs this will act like an array: tallal [ 'age', 'city' ]
// console.log(my["name"],["city"],["fullname"],["age"]);//also not like that
// console.log(my["name"])
// console.log(my["age"])
// console.log(my["city"])//correct
// console.log(my.fullname)//correct becouse no space or -
// // console.log(my.full name);//this is wrong an dcan only be access through
// console.log(my["full name"])




//one more thing symbols interview base
//as . notation only work for strings not ymbols
// console.log(my.mys);
// console.log(typeof mys )
// console.log(my[mys1]);
// console.log(typeof mys1 )
// console.log(my[mys1]);   // undefined
// console.log(my["mys"]); // key1
// console.log(typeof mys)
// console.log(typeof mys1)




// const myss = Symbol("key1")
// const myss1 = Symbol("key2")
// const myy={
//     myss:"key1",
//     [myss1]:"key2"//always symbol will declare with the [] syntax
// }
// console.log(myy.myss)
// console.log(typeof myy.myss)
// console.log(myy["myss"]);
// console.log(typeof myy["myss"] )
// // only [] uses symbol and will be display only with not even[""]
// console.log(myy[myss1]);
// console.log(typeof myy[myss1]);
//this is correct method but when we use type of it will display 
// the string because it will always show the
//type of velue stored not key itself left side, 
// it will diplay the type of "key2"which is string so thats why


// my.email="talalgpt.com" //to re-assign the value 
// // Object.freeze(my);//if we want to freeze the object then it will not change any of the further things
// my.email="talalt.com"//this will not update as the object is already freezed
// console.log(my);

//now how to give a function to the object
// my.greeting=function(){
//     console.log("hello there");
// }
// my.greeting2=function greet(){
//     return "hello world";
// }
// console.log(my.greeting2());
// console.log(my.greeting());
// console.log(my)
// my.greeting();//this will execute the function
// console.log(my.greeting)//this is function it sef(reference) not execution so it will display anonymous
// console.log(my.greetings())//this is the correct one //execution nd calling.
// console.log(my)

//ok now calling a refernce from the same object
my.greetname=function greet(){
    return `i am tallal ${this.name}`//this is uused to target the same object properties
}
console.log(my.greetname())