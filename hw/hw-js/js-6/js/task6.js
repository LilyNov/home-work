const refs = {
    openMenu: document.querySelector('.js-menu'),
    spanOpen: document.getElementById('open'),
    spanClose: document.getElementById('close'),
    menu: document.getElementById('menu-list')
}

refs.openMenu.addEventListener('click', openMenuList)

function openMenuList() {
    refs.spanOpen.classList.toggle('is-close')

    refs.spanClose.classList.toggle('is-open')
    refs.menu.classList.toggle('is-open');

}