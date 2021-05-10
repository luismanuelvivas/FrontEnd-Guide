//...............VARIABLES................................

//......Buttons...........
//Button 1
const buttonDown1 = document.querySelector('#down-arrow1')
const buttonUp1 = document.querySelector('#up-arrow1')
//Button2
const buttonDown2 = document.querySelector('#down-arrow2')
const buttonUp2 = document.querySelector('#up-arrow2')
//Button3
const buttonDown3 = document.querySelector('#down-arrow3')
const buttonUp3 = document.querySelector('#up-arrow3')
//Button4
const buttonDown4 = document.querySelector('#down-arrow4')
const buttonUp4 = document.querySelector('#up-arrow4')

//Header
const header = document.querySelector('header')

//.......Sections......
//Section1
const section1 = document.querySelector('#section1')
//Section2
const section2 = document.querySelector('#section2')
//Section1
const section3 = document.querySelector('#section3')
//Section1
const section4 = document.querySelector('#section4')

//HEADER and SECTION1 ANIMATION
buttonDown1.onclick = () => {
    header.className = 'header-black'
    section1.className = 'section1-off'
    section2.className = 'section2-on'
}

buttonUp1.onclick = () => {
    header.className = 'header'
    section1.className = 'section1'
    section2.className = 'section2'
}

//ALL CONTENT ANIMATION

//button 2
buttonDown2.onclick = () => {
    section2.className = 'section2'
    section3.className = 'section3-on'
}

buttonUp2.onclick = () => {
    section2.className = 'section2-on'
    section3.className = 'section3'
}

//button 3
buttonDown3.onclick = () => {
    section3.className = 'section3'
    section4.className = 'section4-on'
}

buttonUp3.onclick = () => {
    section3.className = 'section3-on'
    section4.className = 'section4'
}

//button 3
buttonDown4.onclick = () => {
    section4.className = 'section4'
}

buttonUp4.onclick = () => {
    section4.className = 'section4-on'
}




