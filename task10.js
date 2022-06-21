/* 1. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
//Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.*/

function getRandom() {
    return Math.floor(Math.random() * (5 - 1) + 1);
}
function getPromise(number) {
    return new Promise((resolve, reject) => {
        let timeout = getRandom();
        setTimeout(() => {
            resolve(number)
        }, timeout * 1000);
    });
}
let first = getPromise(1);
let second = getPromise(2);
let third = getPromise(3);
    
Promise.race([first, second, third])
.then(data => {
    console.log(data)
});
 

/*2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
Создайте async функцию, которая с помощью await будетдожидаться результата getNum, затем возводить его в квадрат и выводить на экран.*/

function getRandomNumber() {
    return Math.floor(Math.random() * (5 - 1) + 1);
}

function getNum() {
    return new Promise((resolve, reject) => {
        let newNumber = getRandomNumber()
        setTimeout(() => {
            resolve(newNumber)
        }, 3000);
    });
}
async function funct() { 
    let result = await getNum(); 
    console.log ((Math.pow(result, 2))); 
} 
funct(); 

/* 3. Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNum1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getRandomNumber(1, 5));
        }, 3000);
    });
}

function getNum2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getRandomNumber(6, 10));
        }, 5000);
    });
}
    
async function funct() {
    let resultOne = await getNum1();
    let resultTwo = await getNum2();
    let sum = (resultOne + resultTwo);
    console.log(sum);
}
funct();
