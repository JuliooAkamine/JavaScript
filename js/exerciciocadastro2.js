

let formcontato = document.querySelector('#formcontato')
let formrecebido = document.querySelector('#formrecebido')



let nomerecebido = document.querySelector('#namerecebido')
let emailrecebido = document.querySelector('#emailrecebido')
let telefonerecebido = document.querySelector('#telefonerecebido')
let assuntorecebido = document.querySelector('#assuntorecebido')
let mensagemrecebido = document.querySelector('#mensagemrecebida')

var botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener('click', function() {
   
    let nome = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let assunto = document.querySelector('#assunto').value
    let telefone = document.querySelector('#telefone').value

    
    if (nome === '') {
        console.log('Campo não preenchido');
    } else{
        nomerecebido.innerHTML = nome
    }

    if (email === '') {
        console.log('Campo não preenchido');
    } else{
        emailrecebido.innerHTML = email
    }

    if (assunto === '') {
        console.log('Campo não preenchido');
    } else{
        assuntorecebido.innerHTML = assunto
    }

    if (telefone === '') {
        console.log('Campo não preenchido');
    } else{
        telefonerecebido.innerHTML = telefone
    }
       
}
);

//meu campo de nome for prenchido.innerhtml = 'valornome'

