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

const section1 = document.querySelector('.section1')
const section1Position = section1.getBoundingClientRect().top

console.log(section1Position)