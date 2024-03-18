'use strict'

let verde = document.getElementById('verde')
let azul = document.getElementById('azul')
let laranja = document.getElementById('laranja')

verde.onmouseover = () => document.body.style.backgroundColor = 'green'
azul.onmouseover = () => document.body.style.backgroundColor = 'blue'
laranja.onmouseover = () => document.body.style.backgroundColor = 'orange'

verde.onclick = () => document.getElementById('texto').innerHTML = 'verde significa saúde e esperança'

azul.onclick = () => document.getElementById('texto').innerHTML = 'azul significa harmonia'


laranja.onclick = () => document.getElementById('texto').innerHTML = 'laranja significa força e energia'





