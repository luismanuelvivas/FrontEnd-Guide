//HEADER ANIMATION
const buttonDown = document.querySelector('#down-arrow')
const buttonUp = document.querySelector('#up-arrow')
const header = document.querySelector('header')

buttonDown.onclick = () => {
    header.className = 'header-black'
}

buttonUp.onclick = () => {
    header.className = 'header'
}

//CONTENT ANIMATION



