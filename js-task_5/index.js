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


//Задание 5
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false
let isEven = function(a) {
    return (a%2==0) ? true : false;
}
