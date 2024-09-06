"use strict"

let overlay = document.querySelector('.overlay')
let overlayTwo = document.querySelector('.overlay2');


function handlerOne() {
    overlay.classList.remove('none')
}
function handlerTwo() {
    overlayTwo.classList.remove('none')
}

function chandlerOne(){
overlay.classList.add('none')
}
function chandlerTwo(){
overlayTwo.classList.add('none')
}