// Задание №1. Дочерние элементы в DOM
// Напишите код, который получит элемент <div>?
// • Напишите код, который получит <ul>?
// • Напишите код, который получит второй <li> (с именем Пит)?

const divEl = document.querySelector('div')
console.log(divEl);
const ulEl = document.querySelector('ul')
console.log(ulEl);
const liEl = ulEl.lastElementChild
console.log(liEl);