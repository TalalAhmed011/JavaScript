//Array
// as we are going to discuss array some main fetaure
//1. array is a refrence type(shallow copy:that share reference of original value)
//deep copies do not share sam reference
//2. array is an object
//3. array is dynamic in size
//4. array can hold any data type including mixed data types
//5. array is zero indexed
//6. if we want to check array data we van check it by indexing only, console.log(arrayName[index])

//ways of ddeclaring arrays
// const myArray=[1,2,3,4];
// const heros=["quaid", "allama", "sirsyed"];
// const mixed=[1, "talal", true, null, undefined, {name:"talal", age:23}, [1,2,3]];
// const myArray2=new Array(5,6,7,8);
// console.log((mixed));//object

//manipulating array elements
// const array=[0,1,2,3,4,5];
// console.log(array.length);//6

// array.push(7,8,9);//adding at last
// array.pop();//last digit will be removed
// array.shift();//first digit will be removed
// array.unshift(-1,-2);//adding at start
//questionaries
// console.log(array.includes(3));//true
// console.log(array.indexOf(4));//4
//  console.log(array);
// array.splice(2,2);//from index 2 , 2 elements will be removed
// console.log(array);//

// const newarray=array.join();
// console.log(array);
// console.log(newarray);//-2,-1,0,3,4,5,6
// console.log(typeof(newarray));//string
// console.log(typeof(array));//object



//conosle.log("==============important slice and splice=================");
// console.log("------------------");
// //slice & splice
// const array1=[0,1,2,3,4,5,6,7,8,9];
// console.log(array1);
// console.log("==slice===");
// const myn1=array1.slice(2,4);//from index 2 to index 4 but 4 not included
// console.log("a",myn1);//[ 2, 3 ]

// console.log("------------------- ");

// console.log(array1);
// console.log("==splice===");
// const myn2=array1.splice(2,2);//from index 2 , 2 elements will be removed
// console.log(array1);
// console.log("b",myn2);//[ 2, 3 ]

// let arr=[10,20,30,40,50,60,70,80,90,100];
// arr.slice(2,5);//it returns a section of array from index 2 to index 5 but 5 not included
// console.log(arr);//original array will remain same as slice do not modify original array

// arr.splice(2,5);//it removes elements from original array from index 2 , 5 elements will be removed
// console.log(arr);//original array will be modified as splice modify original array






let ar=[0,1,2,3,4,5];
console.log("original",ar)

const newar=ar.slice(2,4);
console.log("original aftre slice",ar);
console.log("sliced",newar);

const newar2=ar.splice(2,3);
console.log("original after splice",ar);
console.log("spliced",newar2);











//auto generated---------------------------------------------------
// //accessing array elements
// console.log(array[2]);//2

// //modifying array elements
// array[2]=22;
// console.log(array);//[ 0, 1, 22, 3, 4, 5 ]

// //adding elements to array
// array[6]=6; //adding at specific index
// console.log(array);//[ 0, 1, 22, 3, 4, 5, 6 ]
// array.push(7); //adding at last index
// console.log(array);//[ 0, 1, 22, 3, 4, 5, 6, 7 ]
// array.unshift(-1); //adding at first index
// console.log(array);//[ -1, 0, 1, 22, 3, 4, 5, 6, 7 ]

// //removing elements from array
// array.pop(); //removing from last
// console.log(array);//[ -1, 0, 1, 22, 3, 4, 5, 6 ]
// array.shift(); //removing from first
// console.log(array);//[ 0, 1, 22, 3, 4, 5, 6 ]
// array.splice(2,1); //removing from specific index (index , no of elements to remove)
// console.log(array);//[ 0, 1, 3, 4, 5, 6 ]

// //iterating array elements
// console.log("iterating using for loop");