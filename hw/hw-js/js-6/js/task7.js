
const paneElements = document.querySelectorAll('.pane');

paneElements.forEach(elem => {
    elem.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    elem.firstChild.onclick = () => elem.remove()
})
