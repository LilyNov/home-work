// Задание №1. Последнее значение цикла
// Какое последнее значение выведет этот код? Почему?
let i = 3;
while (i) {
  console.log(i--);
}
// Задание №2.
// Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
// возрастанию, то удвоить их; в противном случае заменить значение каждой
// переменной на противоположное. Вывести новые значения переменных A, B, C.
// Задание №3.
// Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
// возрастанию или убыванию, то удвоить их; в противном случае заменить значение
// каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
// Задание №4.
// На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
// точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.
// Задание №5.
// Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом
// координат, то вывести 0. Если точка не совпадает с начало координат, но лежит на оси
// OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных
// осях, то вывести 3.
// Задание №6.
// Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
// номер координатной четверти, в которой находится данная точка.
// Задание №7.
// Даны целочисленные координаты трех вершин прямоугольника, стороны которого
// параллельны координатным осям. Найти координаты его четвертой вершины.Задание №8.
// Дан номер года (положительное целое число). Определить количество дней в этом
// году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней.
// Високосным считается год, делящийся на 4, за исключением тех годов, которые
// делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются
// високосными, а 1200 и 2000 — являются).
// Задание №9.
// Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
// «нулевое число», «положительное нечетное число» и т. д.
// Задание №10.
// Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида
// «четное двузначное число», «нечетное трехзначное число» и т. д.
// Задание №11. Какие значения выведет цикл while?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?
// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert( i );
// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );
// Задание №12. Какие значения выведет цикл for?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?
// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i );
// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i );Задание №13. Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.
// Задание №14. Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//  alert( `number ${i}!` );
// }
// Задание №15. Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если
// посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку
// нечисловых строк в этой задаче необязательно.
// Задание №16. Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится,
// кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число от 1 до n есть
// остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.
// Задание №17.
// Вычислить среднее арифметическое 2-ух чисел, введенных пользователем.
// Задание №18.
// Напишите скрипт, который вычислит квадрат любого введённого числа.Задание №19.
// Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из
// них.
// Задание №20.
// Напишите программу, проверяющую число, введенное с клавиатуры на четность.
// Задание №21.
// Дано натуральное число а (a<100). Напишите программу, выводящую на экран
// количество цифр в этом числе и сумму этих цифр
// Задание №22.
// Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в
// сантиметры и наоборот. Диалог с пользователем реализовать через браузер
// Задание №23.
// Напишите скрипт, реализующий телевизионную игру «Кто хочет стать миллионером».
// Задание №24. Найти сумму или произведение цифр трехзначного числа
// Пользователь вводит через prompt трёхзначное число. Проверить трехзначное число
// на четность и найти сумму его цифр, если число четное, или произведение его цифр,
// если число нечетное.
// Задание №25. Определить существование треугольника по трем сторонам
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две
// стороны просто <лягут> на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон.
// Напишите код, который должен определять, может ли существовать треугольник при
// таких длинах. Т. е. нужно сравнить суммы двух любых сторон с оставшейся третьей
// стороной. Чтобы треугольник существовал, сумма всегда должна быть больше
// отдельной стороны.Задание №26. Принадлежность точки окружности
// Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10) с центром в начале
// координат.
// Напишите код, который будет выводить сообщение о том, лежит ли данная точка
// внутри окружности или за её пределами. Для извлечения квадратного корня из числа z
// вам понадобится метод Math.sqrt(z).
// Например: let a = Math.sqrt(4); // a=2
// Задание №27. Объекты
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// • Создайте пустой объект user.
// • Добавьте свойство name со значением John.
// • Добавьте свойство surname со значением Smith.
// • Измените значение свойства name на Pete.
// • Удалите свойство name из объекта.
// Задание №28. Объекты-константы
// Можно ли изменить объект, объявленный с помощью const?
// const user = {
//  name: "John"
// };
// user.name = "Pete"; // это будет работать?
// Задание №29. Сумма свойств объекта
// Есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//  John: 100,
//  Ann: 160, Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной
// sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
// Задание №30. Бесконечный цикл по ошибке
// Этот цикл – бесконечный. Он никогда не завершится, почему?
// let i = 0;
// while (i != 10) {
//  i += 0.2;
// }
// Задание №31. Скопирован ли массив?
// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// // что в fruits?
// alert( fruits.length ); // ?
// Задание №32. Операции с массивами
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в
// середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// Задание №33. Вызов в контексте массива
// Каков результат? Почему?
// let arr = ["a", "b"];
// arr.push(function() {
//  alert( this );
// })
// arr[2](); //
