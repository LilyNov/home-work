// Задание №4. Подсчет потомков
// Есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

const liEls = document.querySelectorAll('li');

for (const item of liEls) {
    console.log('li: ', item);
    const childrensLi = item.children
    for (const child of childrensLi) {
        console.log('вложенные элементы li: ', child);
    }
    console.log('Текст: ', item.innerText);
    console.log('Число потомков: ', item.childElementCount);
}

