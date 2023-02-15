/* задача 1 Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log*/
let count = 5
let n = 1
let m = 10
let arr = []

let range = Math.abs(m - n)

for (i = 0; i < count; ++i) {
    arr.push(Math.round(Math.random()*range + Math.min(n, m)))
}
console.log(arr)

/* другой цикл */

/* i = 0;
do {
    arr.push(Math.round(Math.random()*range + Math.min(n, m)));
    ++i
} while (i < count)
console.log(arr) */

/* задача 2 С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП». */
let example = 'Привет, мир!'
let exampleArr = []
let exampleReverse = ''
for (i=0; i< example.length; ++i) {
    exampleArr.push(example[example.length - i-1])
}
for (letter of exampleArr) {
    exampleReverse += letter
}
console.log(exampleArr)
console.log(exampleReverse)

/* задача 3* Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то это мина. Движение танка должно быть представлено как цикл, в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива). При передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва танк считается уничтоженным и прекращает движение. */

let stepCount = 10
let roadMines = []

for (i = 0; i < stepCount; ++i) {
    roadMines.push(Math.round(Math.random()))
}
console.log(roadMines)

let damage = 0

for (i = 0; damage < 2 && i < 11; ++i ) {
    if (roadMines[i] == true && damage < 2) {
        damage += 1;
        console.log(`Танк переместился на ${i+1} позицию.`)
        if (damage < 2) 
            {console.log(`Он попал на мину и поврежден(`)}
            else  {console.log(`Теперь уничтожен((`)}
    }
    else if (roadMines[i] == false) {
        console.log(`Танк переместился на ${i+1} позицию.`)
    }
    else {console.log(`Ты победил!!1`)}
}
/* без ограничения i<11 в первоначальном варианте цикл улетал в бесконечность */

/* задача 4 Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}. День недели 1 января должен задаваться с помощью переменной, то есть программа должна корректно работать для любого дня недели, с которого начинается месяц. Подсказка 1: для дней недели можно создать массив с названиями дней, чтобы обращаться к нему по индексу. Подсказка 2: индекс дня недели можно вычислить с помощью операции остатка от деления.*/
let dayArr = ['понедельник', "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
let dateArr = []
let startDay = 2
for (i = 0; i< 31; ++i) {
    dateArr.push(i+1)
    console.log(`${dateArr[i]} января, ${dayArr [(startDay +i)%7]}`)
}
