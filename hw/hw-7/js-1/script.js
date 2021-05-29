//Задание №1. Переменные

let myName = 'Liliia';
let admin = myName;
console.log(admin);

// ------------------------------------------------------------------
// Задание №2. Константы
// Можно ли использовать заглавные буквы для имени birthday? А для age? Или
// одновременно для обеих переменных?

// Ответ:
// Можно. Имена КОНСТАНТ - переменных, значение которых не изменяется никогда
// на протяжении работы всего скрипта, обычно записываются в формате UPPER_SNAKE_CASE.

// ------------------------------------------------------------------------
// Задание №3. Строки
// Что выведет этот скрипт:
let name = 'Ilya';
console.log(`hello ${1}`); // hello 1
console.log(`hello ${'name'}`); // hello name
console.log(`hello ${name}`); // hello Ilya

// ---------------------------------------------------------------------------
// Задание №4. Преобразования типов
// Какой результат будет у выражений ниже?

'' + 1 + 0; //10
'' - 1 + 0; //-1
true + false; //1
6 / '3'; //2
'2' * '3'; //6
4 + 5 + 'px'; //9px
'$' + 4 + 5; //$45
'4' - 2; //2
'4px' - 2; //NaN
7 / 0; //Infinity
' -9 ' + 5; //-9 5
' -9 ' - 5; //14
null + 1; //1
undefined + 1; //NaN

// -------------------------------------------------------------------------
// Задание №5. Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1,
  b = 1;
let c = ++a; // 2
let d = b++; // 1

// ---------------------------------------------------------------------------
// Задание №6. Результат присваивания
// Чему будут равны переменные a и x в примере ниже?
// let a = 2;
// let x = 1 + (a *= 2); //5

//-----------------------------------------------------------------------------
// Задание №7. Операторы сравнения
// Каким будет результат этих выражений?
5 > 4; //true
'ананас' > 'яблоко'; //false
'2' > '12'; //true
undefined == null; //true
undefined === null; //false
null == '\n0\n'; //false
null === +'\n0\n'; // false;

//--------------------------------------------------------------------------------
// Задание №8. Операторы взаимодействия
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.
// const userName = prompt();
// alert(`${userName}`);

//-------------------------------------------------------------------------------
// Задание №9. Условные операторы
// Выведется ли alert?

// if ('0') {
//   alert('Привет');
// }
// alert выведется, так как условие выполняется - не пустая строка это true

//---------------------------------------------------------------------------------
//Задание №10. Условные операторы
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Каково
// «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае –
// отобразить: «Не знаете? ECMAScript!»

const answer = prompt('Каково"официальное" название JavaScript?');

if (answer === 'ECMAScript') {
  console.log('Верно!');
} else {
  console.log('Не знаете? ECMAScript!');
}

//Задание №11. Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а
// затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

const number = prompt('Введите любое число');

if (number > 0) {
  alert('1');
} else if (number < 0) {
  alert('-1');
} else {
  alert('0');
}

//---------------------------------------------------------------------------
// Задание №12. Перепишите 'if' в '?'
// Перепишите if с использованием условного оператора '?'.
let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

a + b < 4 ? 'Мало' : 'Много';

//--------------------------------------------------------------------------------
// Задание №13. Перепишите 'if..else' в '?'
// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.
let message;
let login;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : '';

//---------------------------------------------------------------------
// Задание №14. ИЛИ
// Что выведет код ниже?
// alert(null || 2 || undefined); // вернет 2. Цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.

//----------------------------------------------------------------------
// Задание №15. ИЛИ
// Что выведет код ниже?
// alert(alert(1) || 2 || alert(3)); //сначала 1, потом 2

// ----------------------------------------------------------------------
// Задание №16. И
// Что выведет код ниже?
// alert(1 && null && 2); //выведет null. Если результат false, останавливается и возвращает исходное значение этого операнда. Если все операнды были истинными, возвращается последний.

// ------------------------------------------------------------------------
// Задание №17. И
// Что выведет код ниже?
// alert(alert(1) && alert(2)); // 1, потом undefined. До правого alert выполнение кода не дойдет. Вызов alert не возвращает значения, соответственно будет undefined.

//----------------------------------------------------------------------------
//Задание №18.
// Что выведет код ниже?
// alert(null || (2 && 3) || 4); // выведет 3, сначала выполнится && и вернет последний true, затем выполнится || и вернет первый true, т.е. значение 3

//------------------------------------------------------------------------------
// Задание №19. Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между
// 14 и 90 включительно
let age;
if (age >= 14 && age <= 90);

// ----------------------------------------------------------------------------------
// Задание №20. Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в
// диапазоне 14 и 90 включительно

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

// ----------------------------------------------------------------------------------
// Задание №21. If
// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) console.log('first'); //условие первое проверится и остановится на первом true (-1) - вызовется first
if (-1 && 0) console.log('second'); //условие не выполняется, console.log не будет вызван
if (null || (-1 && 1)) console.log('third'); //первым выполнится && - true, console.log будет вызван

//вызовется first и third выполнятся

// ------------------------------------------------------------------------console.log-----------
// Задание №22. Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.

let login2 = prompt('Введите Ваш логин');

if (login2 == 'Админ') {
  let password = prompt('Введите пароль');

  if (password == 'Я главный') {
    console.log('Здравствуйте!');
  } else if (password == '' || password == null) {
    console.log('Отменено');
  } else {
    console.log('Неверный пароль');
  }
} else if (login2 == '' || login2 == null) {
  console.log('Отменено');
} else {
  console.log('Я вас не знаю');
}

// ------------------------------------------------------------------------------
// Задание №23. Напишите "if", аналогичный "switch"
let browser;

if (browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

// --------------------------------------------------------------------------------
// Задание №24. Переписать условия "if" на "switch"

let a24 = +prompt('a?', '');
switch (a24) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2 || 3:
    console.log('2,3');
    break;

  default:
    break;
}

// -----------------------------------------------------------------------------------------
// Задание №25.Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае не изменять его. Вывести полученное число.
let num = 7;
if (num > 0) {
  num += 1;
}
console.log(num);

// ------------------------------------------------------------------------------------------
// Задание №26.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае вычесть из него 2. Вывести полученное число.
let num26 = 26;
if (num26 > 0) {
  num26 += 1;
} else {
  num26 = num26 - 2;
}
console.log(num26);

// ------------------------------------------------------------------------------------------
// Задание №27.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; если
// отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
// полученное число.
let num27 = 27;
if (num27 > 0) {
  num27 += 1;
} else if (num27 < 0) {
  num27 -= 1;
} else {
  num27 = 10;
}

console.log(num27);

// Задание №28.
// Даны три целых числа. Найти количество положительных чисел в исходном наборе.
let num1 = 5;
let num2 = -5;
let num3 = 5;
let total = 0;

if (num1 > 0) {
  total += 1;
}
if (num2 > 0) {
  total += 1;
}
if (num3 > 0) {
  total += 1;
}

console.log(total);

// -------------------------------------------------------------------------------
// Задание №29. Даны три целых числа. Найти количество положительных и количество
// отрицательных чисел в исходном наборе.
let numb1 = 5;
let numb2 = -5;
let numb3 = 5;
let totalPositiveNum = 0;
let totalNegativeNum = 0;

if (numb1 > 0) {
  totalPositiveNum += 1;
} else if (numb1 < 0) {
  totalNegativeNum += 1;
}
if (numb2 > 0) {
  totalPositiveNum += 1;
} else if (numb2 < 0) {
  totalNegativeNum += 1;
}
if (numb3 > 0) {
  totalPositiveNum += 1;
} else if (numb3 < 0) {
  totalNegativeNum += 1;
}
console.log(totalPositiveNum);
console.log(totalNegativeNum);

// Задание №30.
// Даны два числа. Вывести большее из них.
let num10 = 10;
let num20 = 20;

num10 > num20 ? console.log(num10) : console.log(num20);

// ----------------------------------------------------------------------------------------------
// Задание №31.
// Даны два числа. Вывести порядковый номер меньшего из них.
let num11 = 10;
let num21 = 20;

num11 < num21 ? console.log(1) : console.log(2);

// ----------------------------------------------------------------------------------------------------
// Задание №32.
// Даны два числа. Вывести вначале большее, а затем меньшее из них.
let num12 = 10;
let num22 = 20;

num12 > num22 ? console.log(num12, num22) : console.log(num22, num12);

// ---------------------------------------------------------------------------------------------------
// Задание №33. Даны две переменные вещественного типа: A, B. Перераспределить
// значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
// большее. Вывести новые значения переменных A и B.
let a = 'cat';
let b = 'b';
let box;

if (a > b) {
  box = a;
  a = b;
  b = box;
}

console.log(a);
console.log(b);

// ----------------------------------------------------------------------------------------------
// Задание №34.Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной сумму этих значений, а если равны, то присвоить переменным
// нулевые значения. Вывести новые значения переменных A и B.

let a1 = 34;
let b1 = 34;

if (a1 !== b1) {
  a1 = a1 + b1;
  b1 = a1 + b1;
} else if (a1 === b1) {
  a1 = 0;
  b1 = 0;
}

console.log(a1);
console.log(b1);

// -------------------------------------------------------------------------------------
// Задание №35.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной большее из этих значений, а если равны, то присвоить
// переменным нулевые значения. Вывести новые значения переменных A и B.
let a2 = 10;
let b2 = 100;

if (a2 !== b2 && a2 > b2) {
  b2 = a2;
} else if (a2 !== b2 && a2 < b2) {
  a2 = b2;
} else if (a2 === b2) {
  a2 = 0;
  b2 = 0;
}

console.log(a2);
console.log(b2);

// Задание №36.
// Даны три числа. Найти наименьшее из них.
let c = 5;
let d = 10;
let e = 15;
let min;

if (c < d && c < e) {
  min = c;
} else if (c < d && c < e) {
}
console.log(min);

// ------------------------------------------------------------------------
// Задание №37.
// Даны три числа. Найти среднее из них (то есть число, расположенное между
// наименьшим и наибольшим).
let f = 10;
let j = 20;
let h = 15;
let between;

if ((f < j && f > h) || (f > j && f < h)) {
  between = f;
} else if ((j < f && j > h) || (j > f && j < h)) {
  between = j;
} else if ((h < f && h > j) || (h > f && h < j)) {
  between = h;
}
console.log(between);

// Задание №38.
// Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
let q = 10;
let w = 20;
let e = 15;
let max;
let min;

if (q < w && q < e) {
  min = q;
} else if (w < q && w < e) {
  min = w;
} else if (e < q && e < w) {
  min = e;
}
console.log(min);

if (q > w && q > w) {
  max = q;
} else if (w > q && w > e) {
  max = w;
} else if (e > q && e > w) {
  max = e;
}
console.log(max);

// --------------------------------------------------------------------------
// Задание №39.
// Даны три числа. Найти сумму двух наибольших из них.
let q = 5;
let w = 12;
let e = 3;
let total = 0;

if ((q > w && q > e) || (q > w && q < e) || (q < w && q > e)) {
  total += q;
}
if ((w > q && w > e) || (w > q && w < e) || (w < q && w > e)) {
  total += w;
}
if ((e > q && e > w) || (e > q && e < w) || (e < q && e > w)) {
  total += e;
}

console.log(total);

// Задание №40.
// Даны три целых числа, одно из которых отлично от двух других, равных между собой.
// Определить порядковый номер числа, отличного от остальных

let x = 1;
let y = 2;
let z = 1;
