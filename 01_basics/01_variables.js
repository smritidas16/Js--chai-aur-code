const accountId=32424      //value is locked
let accountEmail="smriti@gmail.com" 
var accountPassword="1234"
accountCity="Kolkata"
console.log(accountEmail);




// let check
// accountId=2
// console.log(accountId);
// (It will show error, as we can't assign value in const)




//Again check
accountEmail="das@gmail.com"
accountPassword="9123"
accountCity="Paris" //it can happen(without mentioning datatype)
let accontState; // without inserting value(it will show undefined)

console.log(accountEmail);
console.log([accountId,accountEmail,accountPassword,accountCity,accontState])  // safely run 
console.table([accountId,accountEmail,accountPassword,accountCity,accontState]) //table format output

                           //NOTES
// use LET instead of VAR 
// Reasons:
// Why let is better?
// 1️⃣ Block Scope (Safer)

// let works inside the block { } where it is declared.
// if (true) {
//   let x = 10;
// }
// console.log(x); // ❌ Error

// if (true) {
//   var x = 10;
// }
// console.log(x); // ✅ 
// var ignores block boundaries — and that can cause bugs

// 2️⃣ No Re-declaration

// let does NOT allow re-declaring the same variable in the same scope.

// let a = 5;
// let a = 10; // ❌ Error

// But var allows it:

// var a = 5;
// var a = 10; // ✅ Allowed (can cause confusion)


// 👉 Use let for variables that change.
// 👉 Use const for values that don’t change.