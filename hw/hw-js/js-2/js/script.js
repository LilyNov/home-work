// Задание №1. Последнее значение цикла
// Какое последнее значение выведет этот код? Почему?
let i = 3;
while (i) {
  console.log(i--);
}
// цикл будет выполняться пока значение i истинно, выведет 3, 2, 1

// -------------------------------------------------------------------------------------
// Задание №2.
// Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
// возрастанию, то удвоить их; в противном случае заменить значение каждой
// переменной на противоположное. Вывести новые значения переменных A, B, C.
let a = 10;
let b = 20;
let c = 30;

if (a < b && a < c && b < c) {
  a *= 2;
  b *= 2;
  c *= 2;
} else {
  a *= -1;
  b *= -1;
  c *= -1;
}

console.log(a);
console.log(b);
console.log(c);

// --------------------------------------------------------------------------------------
// Задание №3.
// Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
// возрастанию или убыванию, то удвоить их; в противном случае заменить значение
// каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
if ((a < b && a < c && b < c) || (a > b && a > c && b > c)) {
  a *= 2;
  b *= 2;
  c *= 2;
} else {
  a *= -1;
  b *= -1;
  c *= -1;
}

console.log(a);
console.log(b);
console.log(c);

// -----------------------------------------------------------------------------------------
// Задание №4.
// На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
// точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.
let a4 = 0;
let b4 = 20;
let c4 = 7;
const distanceAb = a + b - a;
const distanceAc = a + c - a;
if (distanceAb < distanceAc) {
  console.log(
    `Точка B расположена ближе к точке A. Расстояние от точки А до точки В составляет ${distanceAb}`,
  );
} else {
  console.log(
    `Точка C расположена ближе к точке A. Расстояние от точки А до точки C составляет ${distanceAc}`,
  );
}

// ----------------------------------------------------------------------------------------------
// Задание №5.
// Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом
// координат, то вывести 0. Если точка не совпадает с началом координат, но лежит на оси
// OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных
// осях, то вывести 3.
let x = 2;
let y = -3;
if (x == 0 && y == 0) {
  console.log('Точка совпадает с началом координат: ', 0);
} else if (x == 0 && (y > 0 || y < 0)) {
  console.log('Точка лежит на оси Х: ', 1);
} else if (y == 0 && (x > 0 || x < 0)) {
  console.log('Точка лежит на оси Y: ', 2);
} else {
  console.log('Точка не лежит на координатных осях: ', 3);
}

// ------------------------------------------------------------------------------------------------
// Задание №6.
// Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
// номер координатной четверти, в которой находится данная точка.
if (x > 0 && y > 0) {
  console.log('Точка расположена в I координатной четверти');
} else if (x < 0 && y > 0) {
  console.log('Точка расположена во II координатной четверти');
} else if (x < 0 && y < 0) {
  console.log('Точка расположена во III координатной четверти');
} else {
  console.log('Точка расположена во IV координатной четверти');
}

// ------------------------------------------------------------------------------------------------
// Задание №7.
// Даны целочисленные координаты трех вершин прямоугольника, стороны которого
// параллельны координатным осям. Найти координаты его четвертой вершины.
let x1 = 1;
let y1 = 3;
let x2 = 1;
let y2 = 1;
let x3 = 5;
let y3 = 1;
let x4;
let y4;

if (x1 == x2 && y2 == y3) {
  x4 = x3;
  y4 = y1;
}

console.log(
  `Координаты прямоугольника, стороны которого параллельны координатным осям, равны: A(${x1}, ${y1}); B(${x2}, ${y2}); C(${x3}, ${y3}); D(${x4}, ${y4})`,
);

// Задание №8.
// Дан номер года (положительное целое число). Определить количество дней в этом
// году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней.
// Високосным считается год, делящийся на 4, за исключением тех годов, которые
// делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются
// високосными, а 1200 и 2000 — являются).
let year = 2000;
if (year % 4 != 0) {
  console.log(`В ${year} 365 дней в году`);
} else if (year % 100 != 0) {
  console.log(`В ${year} 366 дней в году`);
} else if (year % 400 != 0) {
  console.log(`В ${year} 365 дней в году`);
} else {
  console.log(`В ${year} 366 дней в году`);
}

// --------------------------------------------------------------------------------------------------
// Задание №9.
// Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
// «нулевое число», «положительное нечетное число» и т. д.
let num9 = 8;
if (num9 % 2 == 0 && num9 > 0) {
  console.log(`"${num9}" является положительным четным числом`);
} else if (num9 % 2 != 0 && num9 > 0) {
  console.log(`"${num9}" является положительным нечетным числом`);
} else if (num9 == 0) {
  console.log(`"${num9}" является нулевым числом`);
} else if (num9 % 2 == 0 && num9 < 0) {
  console.log(`"${num9}" является отрицательным четным числом`);
} else if (num9 % 2 != 0 && num9 < 0) {
  console.log(`"${num9}" является отрицательным нечетным числом`);
}

// --------------------------------------------------------------------------------------
// Задание №10.
// Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида
// «четное двузначное число», «нечетное трехзначное число» и т. д.
let num10 = 100;
let numLength = String(num10).length;

if (num10 > 0 && numLength == 1) {
  console.log(`"${num10}" является положительным однозначным числом`);
} else if (num10 > 0 && numLength == 2) {
  console.log(`"${num10}" является положительным двузначным числом`);
} else if (num10 > 0 && numLength == 3) {
  console.log(`"${num10}" является положительным трехзначным числом`);
} else if (num10 < 0 && numLength == 2) {
  console.log(`"${num10}" является отрицательным однозначным числом`);
} else if (num10 < 0 && numLength == 3) {
  console.log(`"${num10}" является отрицательным двузначным числом`);
} else if (num10 < 0 && numLength == 4) {
  console.log(`"${num10}" является отрицательным трехзначным числом`);
}

// ---------------------------------------------------------------------------------------------
// Задание №11. Какие значения выведет цикл while?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?
// Префиксный вариант ++i:
let i11 = 0;
while (++i11 < 5) console.log(i11); //1,2,3,4 - Префиксный вариант увеличивает на 1, но возвращает старое значение
// Постфиксный вариант i++
let i12 = 0;
while (i12++ < 5) console.log(i12); //1,2,3,4,5 - Постфиксный вариант увеличивает на 1, возвращает текущее значение

// ---------------------------------------------------------------------------------------------
// Задание №12. Какие значения выведет цикл for?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?
// Постфиксная форма:
for (let i = 0; i < 5; i++) console.log(i); //1,2,3,4
// Префиксная форма:
for (let i = 0; i < 5; ++i) console.log(i); //1,2,3,4

// -----------------------------------------------------------------------------------------------
// Задание №13. Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.
for (let index = 2; index <= 10; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

// ----------------------------------------------------------------------------------------------
// Задание №14. Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
let i3 = 0;
while (i3++ < 3) console.log(`number ${i3}!`);

// -------------------------------------------------------------------------------------------------
// Задание №15. Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если
// посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку
// нечисловых строк в этой задаче необязательно.

// let number;
// do {
//   number = prompt('Введите число, большее 100');
// } while (number <= 100);

// ----------------------------------------------------------------------------------------------------
// Задание №16. Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится,
// кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число от 1 до n есть
// остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.
let n = 10;

nextNum: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextNum;
  }
  console.log(i);
}

// -------------------------------------------------------------------------------------------------------
// Задание №17.
// Вычислить среднее арифметическое 2-ух чисел, введенных пользователем.
// let n1 = +prompt('Введите число');
// let n2 = +prompt('Введите еще число');

if (n1 != null && n2 != null) {
  console.log((n1 + n2) / 2);
}

// -----------------------------------------------------------------------------------------------------
// Задание №18.
// Напишите скрипт, который вычислит квадрат любого введённого числа.
// let n18 = prompt('Введите число');

if (n18 != null) {
  console.log(+n1 * 2);
}

// ------------------------------------------------------------------------------------------------------
// Задание №19.
// Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из
// них.
// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let num3 = +prompt('Введите третье число');
let min = Math.min(num1, num2, num3);
let max = Math.max(num1, num2, num3);

console.log(max - min);

// ------------------------------------------------------------------------------------------------------
// Задание №20.
// Напишите программу, проверяющую число, введенное с клавиатуры на четность.
// let n20 = prompt('Введите число');

if (n20 != null && n20 % 2 == 0) {
  console.log(`${n20} является четным числом`);
} else {
  console.log(`${n20} является нечетным числом`);
}

// ------------------------------------------------------------------------------------------------------
// Задание №21.
// Дано натуральное число а (a<100). Напишите программу, выводящую на экран
// количество цифр в этом числе и сумму этих цифр
let naturalNumber = 1;
let str = String(naturalNumber);
let natLength = str.length;

if (natLength == 3) {
  let sum = +str[0] + +str[1] + +str[2];
  console.log(
    `Количество цифр в числе ${naturalNumber} - ${natLength}, суммa этих цифр равна ${sum}`,
  );
} else if (natLength == 2) {
  let sum = +str[0] + +str[1];
  console.log(
    `Количество цифр в числе ${naturalNumber} - ${natLength}, суммa этих цифр равна ${sum}`,
  );
} else {
  console.log(`Количество цифр в числе ${naturalNumber} - ${natLength}`);
}

// ------------------------------------------------------------------------------------------------------
// Задание №22.
// Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в
// сантиметры и наоборот. Диалог с пользователем реализовать через браузер

// let inputSm = prompt('Введите сантиметры');
function convert(inputSm) {
  if (inputSm) {
    d = inputSm * 2.54;
    alert(`В ${inputSm} сантиметрах - ${d} дюймов`);
  }

  let goOn = confirm('Хочешь перевести дюймы в сантиметры??');

  if (goOn) {
    let inputD = prompt('Введите дюймы');
    console.log(inputD);
    sm = Math.floor(((inputD / 2.54) * 100) / 100);
    console.log(sm);
    alert(`В ${d} дюймах - ${sm} сантиметров`);
  }
}
convert(inputSm);

// ------------------------------------------------------------------------------------------------------
// Задание №23.
// Напишите скрипт, реализующий телевизионную игру «Кто хочет стать миллионером».

// ------------------------------------------------------------------------------------------------------
// Задание №24. Найти сумму или произведение цифр трехзначного числа
// Пользователь вводит через prompt трёхзначное число. Проверить трехзначное число
// на четность и найти сумму его цифр, если число четное, или произведение его цифр,
// если число нечетное.
let inputNum = prompt('Введите трехзначное число');

inputNum % 2 == 0
  ? console.log(Number(inputNum[0] + inputNum[1] + inputNum[2]))
  : console.log(Number(inputNum[0] * inputNum[1] * inputNum[2]));

// ------------------------------------------------------------------------------------------------------
// Задание №25. Определить существование треугольника по трем сторонам
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две
// стороны просто <лягут> на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон.
// Напишите код, который должен определять, может ли существовать треугольник при
// таких длинах. Т. е. нужно сравнить суммы двух любых сторон с оставшейся третьей
// стороной. Чтобы треугольник существовал, сумма всегда должна быть больше
// отдельной стороны.
let ab = +prompt('Введите значение стороны АВ треугольника');
let bc = +prompt('Введите значение стороны ВС треугольника');
let ca = +prompt('Введите значение стороны СА треугольника');

function triangle(ab, bc, ca) {
  if (ab + bc <= ca || ab + ca <= bc || bc + ca <= ab) {
    alert('Треугольник не получился))');
  } else {
    console.log(
      `Ваш треугольник имеет следующие значения сторон - AB:${ab}; BC:${bc}; CA:${ca}`,
    );
  }
}

triangle(ab, bc, ca);

// ------------------------------------------------------------------------------------------------------
// Задание №26. Принадлежность точки окружности
// Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10) с центром в начале
// координат.
// Напишите код, который будет выводить сообщение о том, лежит ли данная точка
// внутри окружности или за её пределами. Для извлечения квадратного корня из числа z
// вам понадобится метод Math.sqrt(z).
// Например: let a = Math.sqrt(4); // a=2
let x26 = 4;
let y26 = 9;
let r = 10;
let dot = Math.sqrt(x ** 2 + y ** 2);

if (dot > r) {
  console.log('Точка за пределами окружности');
} else {
  console.log('Точка лежит внутри окружности');
}

// ------------------------------------------------------------------------------------------------------
// Задание №27. Объекты
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// • Создайте пустой объект user.
// • Добавьте свойство name со значением John.
// • Добавьте свойство surname со значением Smith.
// • Измените значение свойства name на Pete.
// • Удалите свойство name из объекта.
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// ------------------------------------------------------------------------------------------------------
// Задание №28. Объекты-константы
// Можно ли изменить объект, объявленный с помощью const?
const user2 = {
  name: 'John',
};
user2.name = 'Pete'; // это будет работать?
// создать можно, работать будет, так как изменяем свойство внутри объекта

// ------------------------------------------------------------------------------------------------------
// Задание №29. Сумма свойств объекта
// Есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной
// sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let allSalaries = 0;

for (const key in salaries) {
  allSalaries += salaries[key];
}
console.log(allSalaries);

// ------------------------------------------------------------------------------------------------------
// Задание №30. Бесконечный цикл по ошибке
// Этот цикл – бесконечный. Он никогда не завершится, почему?
let i30 = 0;
while (i30 != 10) {
  i30 += 0.2;
}
// отсутствует шаг i++, цикл повторяется бесконечно
