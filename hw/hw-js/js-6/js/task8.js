const refs = {
    btnToggleModal: document.querySelector('[data-open-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
}

refs.btnToggleModal.addEventListener('click', toggleModal);
refs.body.addEventListener('keydown', selectEsc);


function showPrompt(html){
    refs.modal.innerHTML = html;
    refs.body.style.overflow = 'hidden';
    const formElement = document.querySelector('[data-form]');
    const inputElement = document.querySelector('[data-input]')
    inputElement.focus() //из-за модалки фокус теряется, не пойму как пофиксить, не работает ни так ни через autofocus
    formElement.addEventListener('submit', getInputText)
}

function getInputText(evt) {
    evt.preventDefault()

new FormData(evt.currentTarget).forEach(element => {
    if(element === '') return
    alert(`Ваш ответ: ${element}`);
});
    evt.currentTarget.reset();
    toggleModal()
}

function selectEsc(evt) {
    if(evt.code === 'Escape') {
        toggleModal()
    }
}

function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
}


showPrompt(`<form class="form" data-form>
<label>
    Когда начнется лето? &#128512;
    <input type="text" name="text" autocomplete="off" data-input>
</label>
<div>
    <button class="link button" type="submit" data-close-modal>ОК</button>
    <button class="link button" data-close-modal>Отмена</button>
</div>
</form>`)