// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

// let reversedArray = [1,2,3,4,5,6];

// let reverseArray = function(array){
//     array.reverse();
//     console.log(array);
//     return array;
// }

// reverseArray(reversedArray);


// 2) найти максимальное значение числа в массиве ([3,67,15...])

// let numArray = [3,67,15,21,3];

// let findMaxValue = function(array){
// let maxValue = array[0];
//    for(let i = 0; i < array.length; i++){
//     if(array[i] > maxValue){
//         maxValue = array[i];
//     }
//    }
//    console.log(maxValue);
//    return maxValue;
// }

// findMaxValue(numArray);



// 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M


// let m = 5;
// let n = 8;
// let arrayNew = [];

// let fibonacci = function(array, length, count){
//   let firstValue = count;
//   let secondValue = firstValue+1;
//   for (let i = 0; i < length; i++) {
//     let current = firstValue + secondValue;
//     firstValue = secondValue;
//     secondValue = current;
//     array.push(current);
//   }
//   return array;
// }
// fibonacci(arrayNew, m, n);
// console.log(arrayNew);



// 4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 3 )

// let firstNumber = 1389;
// let secondNumber = 1358;
// let counter = 0;
// let position = 0;

// let firstArray = (""+firstNumber).split("").map(Number)
// console.log(firstArray);
// let secondArray = (""+secondNumber).split("").map(Number)
// console.log(secondArray);

// let compareArray = function(first, second){
//     for(let i = 0; i < first.length; i++){
//         for(let j = 0; j < second.length; j++){
//             if(first[i] === second[j] && first[i]==second[i]){
//                 position += 1; //po znacheniu
//             }
//             if(first[i] === second[j]){
//                 counter += 1; //po znacheniu
//             }
//             }
//         }
//     console.log(position);
//     console.log(counter);
//     return counter, position;
// }
// compareArray(firstArray, secondArray);

// 5) сортировка массива по возрастанию/убыванию 


// let sortingArray = [8, 130, 45, 21, 10];

// По возрастанию

// let sortArrayAsc = function(array){

//     for (let i = 0; i <= array.length - 2; i++) {
//         let minValue = array[i];

//         for (let j = i + 1; j <= array.length - 1; j++) {
//             if (array[j] < minValue) {
//                 minValue = array[j];
//                 let basket = array[i];
//                 array[i] = minValue;
//                 array[j] = basket;
//             }
//         }
//     }
//     return array;
// }
// console.log(sortArrayAsc(sortingArray));

// По убыванию

// let sortArrayDesc = function(array){

//     for (let i = 0; i <= array.length + 2; i++) {
//         let maxValue = array[i];

//         for (let j = i + 1; j <= array.length + 1; j++) {
//             if (array[j] > maxValue) {
//                 maxValue = array[j];
//                 let basket = array[i];
//                 array[i] = maxValue;
//                 array[j] = basket;
//             }
//         }
//     }
//     return array;
// }
// console.log(sortArrayDesc(sortingArray));


// 6) удалить из массива все повторяющиеся элементы 


// let newArr = [1, 1, 2, 3, 4, 2, 10, 3];

// let testname = function(array){
//     let uniqueNewArr = Array.from(new Set(array));
//     return uniqueNewArr;
// }
// console.log(testname(newArr));