
const sectionEl = document.querySelector('section');
const textEl = document.querySelector('p');

const showNotification = () => {
    let divElement = document.createElement('div')
    divElement.innerHTML = 'Hello!'
    divElement.className = 'notification'
    sectionEl.insertBefore(divElement, textEl)

    setTimeout(() => {
        sectionEl.removeChild(divElement)
    }, 1500);
}

showNotification()