// Задание №3. Поиск элементов
// Найти:
// • Таблицу с id="age-table".
// • Все элементы label внутри этой таблицы (их три).
// • Первый td в этой таблице (со словом «Age»).
// • Форму form с именем name="search".
// • Первый input в этой форме.
// • Последний input в этой форме.

const tableEl = document.getElementById('age-table');
console.log(tableEl);
const labelEl = tableEl.querySelectorAll('label');
console.log(labelEl);
const firstTdEl = tableEl.rows[0].cells[0]
console.log(firstTdEl);
const formEl = document.querySelector('[name="search"]')
console.log(formEl);
const firstInputEl = formEl.firstElementChild.firstElementChild
console.log(firstInputEl);
const lastInputEl = formEl.lastElementChild
console.log(lastInputEl);