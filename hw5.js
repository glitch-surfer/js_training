/* задача 1 Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.
 */
let allEmailArr = ['norm', 'bad', 'spam', 'ass', 'kotiki', 'zaichiki',]
let emailBlackList = ['bad', 'ass', 'spam', 'Xxx', 'viagra','popki', 'gerich',]
let whiteList = []

function sortFromTrash(allItems, trash) {
    for (i = 0; i < allItems.length; ++i) {
        if (!trash.includes(allItems[i])) {
            whiteList.push(allItems[i])
        }
    }
}
sortFromTrash(allEmailArr, emailBlackList)
console.log(whiteList)

/* export default sortFromTrash (allEmailArr, emailBlackList) */

/* задание 2 Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:
•	Общая сумма корзины
•	Количество товаров в корзине
•	Промокод (по умолчанию null)
Правила и порядок (порядок важен!) начисления скидок:
1.	Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
2.	При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
3.	При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
4.	Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.
 */

let basketPrice = 55000
let itemsCount = 1
let promoCode = 'СКИДКА15'

function finalPrice ( rawPrice, amount, promo = null ) {
    if (promo === 'ДАРИМ300' && rawPrice > 300) {
        rawPrice -= 300 
    }
    else if (promo === 'ДАРИМ300' && rawPrice <= 300) {
        return rawPrice = 0
    }
    if (amount >= 10) {
        rawPrice *= .95
    }
    if (rawPrice > 50000) {
        rawPrice = 50000 + (rawPrice - 50000) * .8
    }
    if ( promo ==='СКИДКА15' && rawPrice >= 20000 ) {
        rawPrice *= .85
    }
    return rawPrice
}


console.log(finalPrice (basketPrice, itemsCount, promoCode))