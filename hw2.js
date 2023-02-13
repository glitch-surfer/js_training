/* ДЗ 2 модуль */
/* ЗАДАЧА 1 вычислить площадь прямоугольника зная 2 крайние точки на оси координат */
let x1 = -5
let y1 = 8
let x2 = 10
let y2 = 5

let catetus1 = Math.abs(x1 - x2)
let catetus2 = Math.abs(y1 - y2)
console.log(catetus1*catetus2)

/* ЗАДАЧА 2 сравнить дробные числа с точностью  precise знаков после запятой */
let a = 13.890123
let b = 2.891564
let precise = 3
let normalizeA = Math.floor(a*(Math.pow(10,precise)))/(Math.pow(10,precise));
let normalizeB = Math.floor(b*(Math.pow(10,precise)))/(Math.pow(10,precise));
console.log(normalizeA);
console.log(normalizeB);
console.log(normalizeA > normalizeB);
console.log(normalizeA < normalizeB);
console.log(normalizeA >= normalizeB);
console.log(normalizeA <= normalizeB);
console.log(normalizeA === normalizeB);
console.log(normalizeA !== normalizeB);

/* другое решение*/
let c = 13.890123
let d = 2.891564
let precise1 = 3
let normalizeC = Number(c.toFixed(precise1));
let normalizeD = Number(d.toFixed(precise1));
console.log(normalizeC);
console.log(normalizeD);
/* ответ неправильный изза математического округления функции */


/* ЗАДАЧА 3 найти из диапазона случайное нечетное число */

let n = -10
let m = 10
let range = Math.abs(m-n)

let numberInrage = Math.round(Math.random()*range)
let min= Math.min(n,m)

let randomNumber = min+numberInrage

let result = randomNumber +1 - Math.abs(randomNumber%2)
console.log(result)