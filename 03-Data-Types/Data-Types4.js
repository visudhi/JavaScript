/* constant DataType*/
/*BigInt is a special numeric type that provides support for 
integers of random length.*/

//Can be generated in 2 ways

//By appending n to the end of a integer

//By calling function BigInt

const x= 123456789123456789123456789n;

const x1= BigInt("123456789123456789123456789112");

const x2= BigInt(246);

console.log(x);

console.log(x1);

console.log(x2);

/* Symbol DataType */

/*A "symbol" represents a unique identifier.
 You can make use of Symbol() to generate a value of this type. */

let x3= Symbol("s");

let x4=Symbol("s1");

console.log(x3);
console.log(x4);

/* 
 To read a symbol from the registry, use Symbol.for(key) which checks if there’s a symbol described as key, then returns it, 
 otherwise creates a new symbol Symbol.for(key) and stores it in the registry by the given key
*/

let empid = Symbol.for("empno"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let empidAgain= Symbol.for("empid");

console.log(empid);