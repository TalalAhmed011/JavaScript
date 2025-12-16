let value1=1
let value2=""
let value3="1"
let value4="tallal"
let value5=true
let value6=0
let value7=null
let value8=undefined
let value9=NaN


console.log(typeof( value1));
console.log(typeof(value2));
console.log(typeof(value3));
console.log(typeof(value4));
console.log(typeof(value5));
console.log(typeof(value6));
console.log(typeof(value7));
console.log(typeof(value8));
console.log(typeof(value9));
// console.log(typeof(stringIsNumber));


//------------------------------------------------------
let myNumber=true
let stringIsNumber=Number(myNumber)

console.log(typeof(stringIsNumber));
console.log(stringIsNumber);

// ""  =>0   number
// "1" =>1   number
// "talal" => nan number  :string is converted but the value is not number so it displays Nan
// undefind => nan number
// true =>1 number

// boolean
// true=>1
// false=>0
// "" => false
// "talal" => true



let number=1
let convert= String(number)
console.log(convert);
console.log(typeof (convert));

// 1
// STRING 
// CONVERSION DONE
//-----------------------------------------------------------------\
console.log("========================================");
//conversion & equality confusions
 console.log(1==1);

 console.log(1>1);
 console.log(1<1);
 console.log(1<=1);
 console.log(1!=1);

//easy simple
 //---------------
 //to avoid these types of^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 //  bcz of confusing outputs as we need to write clean code
 console.log("1">1);
 console.log("01">1);

 //confusing

 //------------------------
 console.log(null==1);
 console.log(null>1);
 console.log(null<1);



 
 
 
 