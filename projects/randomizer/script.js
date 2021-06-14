const refs = {
    form: document.querySelector('[data-form]'),
    number: document.querySelector('[data-number]'),
    numerFrom: document.querySelector('[data-number-from]'),
    numberTo: document.querySelector('[data-number-to]'),
    btnRandom: document.querySelector('[data-btn]'),
    result: document.querySelector('[data-result]'),
}

refs.form.addEventListener('submit', getInputText);

let min;
let max;
let num;
let arr = [];

function getInputText(evt) {
    evt.preventDefault()
    num = +refs.number.value
    min = +refs.numerFrom.value;
    max = +refs.numberTo.value;
    evt.currentTarget.reset();
    randomNum(num, min, max);
    renderResult();
    arr = [];
}

function randomNum(num, min, max) {
    for (let index = 0; index < num; index++) {
        let randomInteger = Math.floor(min + Math.random() * (max + 1 - min));
        arr.push(randomInteger)
    }
}

function renderResult() {
    let number = arr.join(', ');
    refs.result.innerHTML = `Result: ${number}`;
}
