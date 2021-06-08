function createCalendar(elem, year, month) {
    let mon = month - 1;
    let day = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пустые ячейки
    for (let i = 0; i < getDay(day); i++) {
      table += '<td></td>';
    }

    // ячейки
    while (day.getMonth() == mon) {
      table += '<td>' + day.getDate() + '</td>';

      if (getDay(day) % 7 == 6) { 
        table += '</tr><tr>';
      }

      day.setDate(day.getDate() + 1);
    }

    if (getDay(day) != 0) {
      for (let i = getDay(day); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // конец таблицы
    table += '</tr></table>';
    elem.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }

  createCalendar(calendar, 2021, 6);