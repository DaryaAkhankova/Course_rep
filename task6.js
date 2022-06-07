//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let comparing = '123789';
console.log(comparing);
let a = Number(comparing[0]) + Number(comparing[1]) + Number(comparing[2]);
let b = Number(comparing[3]) + Number(comparing[4])+ Number(comparing[5]);
if (a==b){
    console.log('да');
} else{
    console.log('нет');  
}

//  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// Решение 1 через while
let n=1000;
let num=0;
while(n>50){
    n=n/2;
    num++;
}
console.log(n,num);

// Решение 2 через for
let v = 1000;
let numb;
for (numb = 0; v > 50; numb++){
    v=v/2;
};
console.log(v, numb);

//  Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;

for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}
let average = sum/arr.length;
console.log('Среднее значение: '+average);


//  Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrayTask = [1, 2, 3, 4, 5];
let arrayRemove = arrayTask.splice(3, 0, 'a','b','c');
console.log(arrayTask);
console.log(arrayRemove);

//  Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arrayTaskSecond = [1, 2, 3, 4, 5];
let arrayRemoveOne = arrayTaskSecond.splice(1,0,'a','b');
let arrayRemoveTwo = arrayTaskSecond.splice(6,0,'c');
let arrayRemoveThree = arrayTaskSecond.splice(8,0,'e');
console.log(arrayTaskSecond);

//  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arraySort = [3, 4, 1, 2, 7];
arraySort.sort();
console.log(arraySort);