let formcadastro = document.querySelector('#formcadastro')
let formficha = document.querySelector('#formficha')
let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let cargo = document.querySelector('#cargo')
let salario = document.querySelector('#salarioo')

let nomeficha = document.querySelector('#nomeficha')
let idadeficha = document.querySelector('#idadeficha')
let cargoficha = document.querySelector('#cargoficha')
let salarioficha = document.querySelector('#salarioficha')



formcadastro.addEventListener('submit', enviar)

function enviar (event) {
    event.preventDefault()
    let valornome = nome.value
    let valoridade = idade.value
    let valorsalario = salario.value
    let valorcargo = cargo.value

    formcadastro.style.display = 'none'
    document.getElementById('formficha').style.display = 'flex'
    document.getElementById('container-main').style.height = '400px'

    


    
    
   nomeficha.innerHTML = valornome
   idadeficha.innerHTML = valoridade
   cargoficha.innerHTML = valorcargo
   salarioficha.innerHTML = 'R$'+valorsalario+''

}



