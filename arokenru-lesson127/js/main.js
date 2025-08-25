const body = document.querySelector('.body');
const menuBtn = document.querySelector('.burger-icon');
const menuElements = document.querySelectorAll('.nav__link');

const toggleMenu = () => {
    body.classList.toggle('body--open-menu')
}

menuBtn.addEventListener('click', toggleMenu)

const closeMenu = () => {
    body.classList.remove('body--open-menu')
}

const closeMenuElem = () => {
    menuElements.forEach(elem => {
        elem.addEventListener('click', () => {
            if(body.classList.contains('body--open-menu')) {
                body.classList.remove('body--open-menu')
            }
        })
    })
}

const closeMenuToEsc = () => {
    document.addEventListener('keydown', event => {
        if(event.code === "Escape" && body.classList.contains('body--open-menu')) {
            closeMenu()
        }
    })
}

closeMenuElem()
closeMenuToEsc()