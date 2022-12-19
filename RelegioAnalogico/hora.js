const hour = document.querySelector('.hours')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.seconds')
let h1 = document.createElement('h1')
h1.style.marginTop = '1rem'

setInterval(()=>{
    let data = new Date();
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    hour.style.setProperty('rotate',`${horas*30 - 90}deg`)
    minute.style.setProperty('rotate',`${minutos*6 - 90}deg`)
    second.style.setProperty('rotate',`${segundos*6 - 90}deg`)
    h1.innerText = `${horas}:${minutos}:${segundos}`
},100)

function tempo(){
    document.body.querySelector('.container').append(h1)
    document.querySelector('button').classList.add('hidden')
}
