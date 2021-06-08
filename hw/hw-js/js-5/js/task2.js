// Задание №2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

const tableEL = document.querySelector('table')

 const styleTd = () => {
     for (let index = 0; index < 5; index++) {
         tableEL.rows[index].cells[index].style.backgroundColor = 'red'
     }
 }
 styleTd()