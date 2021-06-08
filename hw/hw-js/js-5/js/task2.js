// Задание №2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

const tableEL = document.querySelector('table')

 const styleTd = () => {
     for (let index = 0; index < tableEL.rows.length; index++) {
         let td = tableEL.rows[index].cells[index]
        td.style.backgroundColor = 'red'
     }
 }
 styleTd()