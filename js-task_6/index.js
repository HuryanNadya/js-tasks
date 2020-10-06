let i;

// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.
let str1= 'aaa@bbb@ccc';
console.log(str1.replace(/@/g,"!"));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.
let date='2025-12-31';
console.log(date.split('-').reverse().join('/'));

//3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).
let str3 = 'Я учу javascript!';
console.log(str3.substring(6,16));
console.log(str3.substr(6, 10));
console.log(str3.slice(6,16));


// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum4=0;
for (i=0; i<arr4.length; i++) {
    sum4+=Math.pow(arr4[i],3);
}
console.log("Квадратный корень = "+Math.sqrt(sum4));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

let a=3, b=5, c;
c=a-b;
console.log(Math.abs(c));

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

function setDate() {
    let todayDate = new Date(),
    date = todayDate.getDate(),
    month = todayDate.getMonth(),
    year = todayDate.getFullYear(),
    hours = todayDate.getHours(),
    minutes = todayDate.getMinutes(),
    seconds = todayDate.getSeconds();

    (date>=1 || date <=9) ? date='0'+date : '';
    (month>=1 || month <=9) ? month='0'+month : '';
    let newDate=hours+':'+minutes+':'+seconds+' '+ date+'.'+month+'.'+year;
    return newDate;
}    
console.log(setDate());

//7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.
let str7='aa aba abba abbba abca abea';
let reg7=/ab{1,}a/gi; 
console.log(str7.match(reg7));

// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.