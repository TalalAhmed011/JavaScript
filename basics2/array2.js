// here we dscuss about the merging of arrays how we can cobine/merge two arrays

//methods of merging two arrays
// 1st method - using push operator
let heros=["quaid", "allama", "sirsyed"];
let villains=["akram", "jadu", "salman"];

// heros.push(villains)//merge arrays in array.not it single componenets.
// console.log(heros);//[ 'quaid', 'allama', 'sirsyed', [ 'akram', 'jadu', 'salman' ] ]

//not recommended

// 2nd method - using concat() method--------------------------------------
// let marray=heros.concat(villains);
// console.log(marray);//[ 'quaid', 'allama', 'sirsyed', 'akram', 'jadu', 'salman' ]
// //recommended but used on choice

// //3rd method - using spread operator--------------------------------------means kanch ka glass toot jana phel jana
// let mergedarray=[...heros, ...villains];
// console.log(mergedarray);//[ 'quaid', 'allama', 'sirsyed', 'akram', 'jadu', 'salman' ]
// //most recommended and mostly used

//rare scenario-------------------complex
let array1=[1,2,3,[4,4,[5,55,[6,6],[7,7]]]];
// const spreadarray=[...array1];
// console.log(spreadarray);//[ 1, 2, 3, [ 4, 4, [ 5, 55, [Array], [Array] ] ] ]
// //it will only spread first level elements rest will remain same, while there are 4 arrays in the parent array
// //so for this we use flat() method

//------------------use flat---------
// const flattedarray=array1.flat(5);//3 is the depth level of flattening
// console.log(flattedarray);//[ 1, 2, 3, 4, 4, 5, 55, 6, 6, 7, 7 ]
// //it will flatten the array up to depth level 3

//-------hack we can use depth level = infinity---------------
const flattedarray2=array1.flat(Infinity);
console.log(flattedarray2);//[ 1, 2, 3, 4, 4, 5, 55, 6, 6, 7, 7 ]

//--------------------------------------------------------------------

//WAYS OF CREATING ARRAYS FROM STRING ETC
//FORM & OFF

console.log (Array.from("tallal"));//[T,a,l,l,a,l]
console.log (Array.from({name: "tallal"}));//return empty array as it did,nt know what to make array key or value

//off
let a=100
b=200
c=300
console.log(Array.of(a,b,c))