'use strict'

const numbers = document.querySelectorAll('.number');
let x = 0;
let rotation = 30;

numbers.forEach(()=>{
    numbers[x].style.setProperty('rotate',`${rotation}deg`);
    x++;
    rotation += 30;
})