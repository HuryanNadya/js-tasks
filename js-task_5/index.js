let i, j;
//Задание 1
// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

let minusNumb = function(a, b, c) {
    return (a-b)/c;
}
console.log(minusNumb(12, 2, 5));


//Задание 2
// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.
let countCube=function(a) {
    return a*a*a;
}
let countSquare=function(a) {
    return a*a;
}
console.log(countCube(2));
console.log(countSquare(2));

//Задание 3
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.
let maxNumb=function(a,b) {
    return (a>b) ? a : b;
}
let minNumb=function(a,b) {
    return (a<b) ? a : b;
}
console.log(maxNumb(5,8));
console.log(minNumb(5,-3));

//Задание 4
// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

// let arr4=[];
// function createArray(n, k) {
//     for (i=n;i<=k;i++) {
//         arr4.push(i);
//     }
//     return console.log(arr4);
// }

// createArray( +prompt('Введите начало массива',''), +prompt('Введите конец массива',''));

//Задание 5
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false
let isEven = function(a) {
    return (a%2==0) ? true : false;
}

//Задание 6
// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
// let arr1=[2, 8, -10, 9, 40, 34, 98, 3], arr2=[];

// function checkEvenArray(arr) {
//     for (i=0;i<arr.length;i++) {
//         (isEven(arr[i])) ? arr2.push(arr[i]) : '';
//     }
//     console.log('Старый массив '+arr1+"; Четный массив "+arr2);
// }

// checkEvenArray(arr1);

//Задание 7
// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
i=5;
function createPyramid(n, s){
    if (n==isNaN) return;    
    for (i=1; i<=n; i++) {
        for (j=1; j<=i; j++) {
            if (+s == 0) {
                document.write(i) 
            } else {
                document.write(s)
            }      
        }
        document.write('<br/>');
    }
}
createPyramid( +prompt('Введите кол-во рядов',''), prompt('Введите доп символ',''));

//Задание 8
// Дан массив с числами (передается параметром). 
// Выведите последовательно его элементы, используя рекурсию и не используя цикл.
let arr8=[1, 6, 7, 9, 10, -10, 2, 5, 8];
function showArray(arr, i) {
    if (i < arr.length) {
        console.log (arr[i]);
        return showArray(arr8, i+1);
    }
}
showArray(arr8, 0);