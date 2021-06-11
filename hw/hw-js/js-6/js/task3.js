// /**
//  * Позиционирует элемент elem относительно элемента anchor в
// соответствии со значением position.
//  *
//  * @param {Node} anchor элемент, около которого
// позиционируется другой элемент
//  * @param {string} position одно из: top/right/bottom
//  * @param {Node} elem элемент, который позиционируется
//  *
//  * Оба элемента elem и anchor должны присутствовать в документе
//  */
function positionAt(anchor, position, elem) {
    const anchorCoords = anchor.getBoundingClientRect();

    if(position === 'top') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    } else if (position === 'right') {
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    } else if (position === 'bottom') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
    }
}

// Костя, как на картинке что-то не получается у меня, 
// а нижний левый note вообще на текст залез. И то что note эти
//  с прокруткой там же остаются это нормально вообще?)) Или может у меня экран маловат... Чёто сводят меня с ума эти координаты)

    /**
    * Показывает заметку с заданным содержимым на заданной позиции
    * относительно элемента anchor.
    */
    function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
    }
    // test it
    let blockquote = document.querySelector('blockquote');
    showNote(blockquote, "top", "note above");
    showNote(blockquote, "right", "note at the right");
    showNote(blockquote, "bottom", "note below");