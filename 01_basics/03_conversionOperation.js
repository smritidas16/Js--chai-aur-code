let score=33

console.log(typeof score); //number
console.log(typeof (score)); //number

let Value="33"
console.log(typeof Value); //string

//Conversion1

let valueInNumber=Number(Value) /*Score was a string which we want to convert into number
Syntax:  take a new variable = type you want to convert(old variable)*/

console.log(typeof valueInNumber ); //number

//Conversion2
let a="33abc"

console.log(typeof a); //string

let change_a_Into=Number(a) 
console.log(typeof change_a_Into); //will show 'number' but

console.log(change_a_Into); //NaN=Not a number


//Conversion3
let b=null

console.log(typeof b); //object

let change_b_into=Number(b)
console.log(typeof change_b_into); //number
console.log(change_b_into); //0

//Conversion3
let c=undefined

console.log(typeof b); //undefined

let change_c_into=Number(c);
console.log(typeof change_c_into); //number
console.log(change_c_into); //NaN


//Conversion3
let d= true

console.log(typeof d); //boolean

let change_d_into=Number(d)
console.log(typeof change_d_into); //number
console.log(change_d_into); //1

//Conversion4
let e="Smriti"

console.log(typeof e); //string

let change_e_into=Number(e)
console.log(typeof change_e_into);//number
console.log(change_e_into); //NaN       (as string can't be converted into number)

//"33"=>  convert ✅ value=33
//"33ab"=> conert ✅value=NaN
//true => convert ✅value = 1
//false=> convert ✅value=0





//Conversion 5


//boolean to number
let isStudent=true

let change_into_num=Number(isStudent)

console.log(typeof change_into_num);//number
console.log(change_into_num);//1


//number to boolean
let isSunday=0

let change_into_bool=Boolean(isSunday)
console.log(typeof change_into_bool); //boolean
console.log(change_into_bool); //false


//conversion in boolean
Boolean(1);      // true
Boolean(0);      // false
Boolean("");     // false
Boolean("hi");   // true
Boolean(null);   // false
Boolean(undefined); // false


//Conversion 6

//Convert into string

let someNumber=6

let stringNumber=String(someNumber)
console.log(stringNumber); //6
console.log(typeof stringNumber); //string

//****************OPERATIONS****************************** */

let value=3
let negValue=-value
console.log(negValue); //-3

console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(2**3); //8(to the pow)
console.log(2%3); //2

let str1="Hello"
let str2="Smriti"

console.log(str1+str2); //Hellosmriti
//or 
let str3=str1+str2
console.log(str3);//HelloSmriti
//*Concatination happens only for + sign */


console.log("1"+2); //"12"
console.log(1+"2"); //"12"
console.log("1"+2+2); //"122"
console.log(1+2+"2"); //32

//Go search in chatGPT to know more


let marks=79
marks++
console.log(marks); //80












