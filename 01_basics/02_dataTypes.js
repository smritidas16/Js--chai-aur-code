"use strict"; //treat all JS code as newer version




// alert(3 + 3) //Will Show ERROR as we are using Node JS not browser








// writing tips

console.log(3+3) //✅
console.log(3+3);//✅
//console.log(3+3) console.log("Hii") //❌
console.log(3+3); console.log("Hii") //✅
console.log(3+3)    //good
console.log("Hii") //good







//DATA TYPES--------i) Primitive, ii)Non-primitive

//i)Primitive  [Number, String, Boolean, Undefined, BigInt, Symbol]

/* NUMBER : 
range=> 2 to power 53(maybe)

example:  
let age= 18;
let price= 99.90; //no separate int float
*/

/* STRING 

example:
let name="Smriti"
let msg='Hii'

use: "" or '' or ``
*/

/*BOOLEAN 
only=> true or false

example:
let isSunday=false;
let isMomnday=true;
*/

/* UNDEFINED
when variable is declared but value is not assigned

example:
let x;
console.log(x); // output: undefined
*/

/*NULL 
Represents intentional empty value.not undefined but empty

let data= null;
*/

/*BigInt
used for very large numbers

example:
let bigNumber = 12345678901234567890n;
(You add n at the end)
*/

/*SYMBOL
pore porabe */

//ii) Non-primitive(object)
// bhalo kore poraini



//TRICK

/*we use console.log(typeof ______) => to know the type of the data

example:
console.log(typeof 17); // output: NUmber
console.log(typeof "smriti"); //String

BUT BUT BUT (EXCEPTION)

console.log(typeof undefined); //output : undefined
console.log(typeof null): //output: object
*/
