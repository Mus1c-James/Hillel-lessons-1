"use strict";
const userName = "Alex!";    // String
const userAge = 34;          // Number
const numberFloatPoint = 11.14; // Number (floating-point)
const boolTrue = true;       // Boolean
const nullNull = null;       // object
const undUndefine = undefined; // Undefined
const bigIntNumber = BigInt(123456789012345678901234567890); // BigInt
const objObject = { name: "Alex" }; // Object 
const dateObj = new Date();   // Date (тип Object)
const logFunc = function () {}; // Function ( c Object)

// Console 
 console.log('userName', userName);
 console.log('userAge', userAge);
 console.log('numberFloatPoint', numberFloatPoint);
 console.log('boolTrue', boolTrue);
 console.log('nullNull', nullNull);
 console.log('undUndefine', undUndefine);
 console.log('bigIntNumber', bigIntNumber);
 console.log('objObject', objObject);
 console.log('dateObj', dateObj);
 console.log('logFunc', logFunc); 

// Tyoeof
document.getElementById("content").innerHTML = `
   <p>Значення: <b>${userName}</b></b>, Тип: <b>${typeof userName}</b> </p>

   <p>Значення: <b>${userAge}</b>, Тип: <b>${typeof userAge}</b></p>

   <p>Значення: <b>${numberFloatPoint}</b>, Тип: <b>${typeof numberFloatPoint}</b></p>

   <p>Значення: <b>${boolTrue}</b>, Тип: <b>${typeof boolTrue}</b></p>

   <p>Значення: <b>${nullNull}</b>, Тип: <b>${typeof nullNull}</b></p>

   <p>Значення: <b>${undUndefine}</b>, Тип: <b>${typeof undUndefine}</b></p>

   <p>Значення: <b>${bigIntNumber}</b>, Тип: <b>${typeof bigIntNumber}</b></p>

   <p>Значення: <b>${objObject}</b>, Тип: <b>${typeof objObject}</b></p>

   <p>Значення: <b>${dateObj}</b>, Тип: <b>${typeof dateObj}</b></p>

   <p>Значення: <b>${logFunc}</b>, Тип: <b>${typeof logFunc}</b></p>
`;