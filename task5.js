// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
// 4) Выполнить явное преобразование(number, string, boolean)

let a = 2;
let b = 'hello';
let c = true;

//1 

let resultFirst = b+c;
console.log(resultFirst);

let resultSecond = b+a;
console.log(resultSecond);

let resultThird = a+c;
console.log(resultThird);

// 2 

let resultFourth = b*c;
console.log(resultFourth);

let resultFifth = b*a;
console.log(resultFifth);

let resultSixth = a*c;
console.log(resultSixth);

// 3

let resultSeventh = b/c;
console.log(resultSeventh);

let resultEighth = b/a;
console.log(resultEighth);

let resultNineth = a/c;
console.log(resultNineth);

// 4

let valueNum = 123;
let valueStr = '123456';
let valueBool = true;


let valueNumStr = String(valueNum);
console.log(valueNumStr);

let valueNumBool = Boolean(valueNum);
console.log(valueNumBool);

let valueStrNum = Number(valueStr);
console.log(valueStrNum);

let valueStrBool = Boolean(valueStr);
console.log(valueStrBool);

let valueBoolNum = Number(valueBool);
console.log(valueBoolNum);

let valueBoolStr = String(valueBool);
console.log(valueBoolStr);