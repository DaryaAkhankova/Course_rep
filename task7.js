// 1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let count = 3;
let firstPlayerResult = 0;
let secondPlayerResult = 0;

for(let i = 1; i <= count; i++){
    firstPlayerResult  += Math.floor(Math.random() * 12) + 2;
    secondPlayerResult += Math.floor(Math.random() * 12) + 2;
}
console.log(firstPlayerResult);
console.log(secondPlayerResult);

if(firstPlayerResult > secondPlayerResult){
   console.log('First player won with result: ' + firstPlayerResult)
}
if(secondPlayerResult > firstPlayerResult){
   console.log('Second player won with result: ' + secondPlayerResult)
} 
if(secondPlayerResult === firstPlayerResult){
    console.log('Draw');
}


// 2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня. 

let counter = 0;

function numberOfFridaythe13th(year) {
    for (let i = 1; i <= 12; i++) {
        let day = new Date(i + "/13/" + year);                          
        if (day.getDay() === 5) {
            counter++;
        }
    }
    return counter;
}
for(let i = 2000; i<=2022; i++){ 
    numberOfFridaythe13th(i);
}

console.log(counter);


// 3) Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части 
// (сумма трех чисел будет равна 15) (4,6,5)
// а) числа изначальное число целое, числа разбивки - целые (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4/, 5.20, 5.25)

let  countValue = 8;
let  value = 9;
let splitNumberTest = function (valueInt, count){
    let difference  = 0;

    if(valueInt>count){
        difference=valueInt-count;
    }
    
    let result = [];
   for(let i = 0; i < valueInt; i++){
        let sum = Math.round(Math.random()*(count-1))+1;
        console.log(sum)
        result.push(sum);
        count-=sum;
   };
   if(difference!==0){
       for(let i=1; i<difference;i++){
           result.push(0);
       }
   }
   return result;
   
};
console.log(splitNumberTest(value, countValue));