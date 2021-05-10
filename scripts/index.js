//HEADER ANIMATION
const buttonDown = document.querySelector('#down-arrow1')
const buttonUp = document.querySelector('#up-arrow1')
const header = document.querySelector('header')

buttonDown.onclick = () => {
    header.className = 'header-black'
}

buttonUp.onclick = () => {
    header.className = 'header'
}

//CONTENT ANIMATION



