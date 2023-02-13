/* ДЗ 2 модуль */
/* задача 1 В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».*/
let password = 'adasdf_'

if (password.length >= 4 && password.includes('_') || password.includes('-')) {
    console.log('Пароль надежный');
    } else {
        console.log('Пароль недостаточно надежный');
        }
/* второе решение */        
password.length >= 4 && password.includes('_') || password.includes('-') ?
console.log('Пароль надежный') : console.log('Пароль недостаточно надежный')

/* задача 2 В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.
*/
 let name = 'ВАСИЛИй'
 let surename = 'пупкиН'

 let normalaizeName = name.toLowerCase()
 let normalaizeSurname = surename.toLowerCase()
 let FinalName = normalaizeName[0].toUpperCase() + normalaizeName.slice(1)
 let FinalSurname = normalaizeSurname[0].toUpperCase() + normalaizeSurname.slice(1)

 name === FinalName ? console.log(FinalName+' - Имя осталось без изменений') : console.log(FinalName+ ' - Имя было преобразовано');
 surename === FinalSurname ? console.log(FinalSurname+ ' - Фамилия осталась без изменений') : console.log(FinalSurname+ ' - Фамилия была преобразована');
