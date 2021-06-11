const fieldEl = field.getBoundingClientRect()
console.log(fieldEl);

// верхний левый, внешний угол
let leftTop = {
    left: fieldEl.left,
    top: fieldEl.top,
}
console.log(`Верхний левый, внешний угол - x: ${leftTop.left}, y: ${leftTop.top}` );

// нижний правый, внешний угол
let rightBottom = {
    right: fieldEl.right,
    bottom: fieldEl.bottom,
}
console.log(`Нижний правый, внешний угол - x: ${rightBottom.right}, y: ${rightBottom.bottom}` );


// верхний левый, внутренний угол
let leftTopInside = {
    left: leftTop.left + field.clientLeft,
    top: leftTop.top + field.clientTop,
}
console.log(`Верхний левый, внутренний угол - x: ${leftTopInside.left}, y: ${leftTopInside.top}` );


// нижний правый, внутренний угол
let rightBottomInside = {
    right: leftTop.left + field.clientLeft + field.clientWidth,
    bottom:  leftTop.top + field.clientTop + field.clientHeight
}
console.log(`Нижний правый, внутренний угол - x: ${rightBottomInside.right}, y: ${rightBottomInside.bottom}` );

