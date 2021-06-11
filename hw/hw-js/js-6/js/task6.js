const ulEl = document.querySelector('ul')
console.log(ulEl);
let arr = []

const textLi = (arr) => {
    while (true){
        let userText = prompt('Введите данные для списка');
        if(userText == null) break;
        arr.push(userText);
    }

     return arr.map(li => `<li>${li}</li>`).join(' ');
}

let text = textLi(arr);
ulEl.innerHTML = text;
