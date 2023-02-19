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