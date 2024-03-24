let nomerecebido = document.querySelector('#namerecebido')
let emailrecebido = document.querySelector('#emailrecebido')
let telefonerecebido = document.querySelector('#telefonerecebido')
let assuntorecebido = document.querySelector('#assuntorecebido')
let mensagemrecebido = document.querySelector('#mensagemrecebida')

let btnenviar = document.getElementById("enviar");

btnenviar.addEventListener('click', function(event) {
    event.preventDefault()
    
   
    let nome = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let assunto = document.querySelector('#assunto').value
    let telefone = document.querySelector('#telefone').value
    let mensagem = document.querySelector('#mensagem').value

    
    if (nome && email && assunto && telefone && mensagem   === ''  ) {
        console.log('Campo não preenchido');
    } else{
        nomerecebido.innerHTML = nome
        emailrecebido.innerHTML = email
        assuntorecebido.innerHTML = assunto
        telefonerecebido.innerHTML = telefone
        mensagemrecebido.innerHTML = mensagem
    }

}
);

//lógica usada - se meu campo não for preenchido exiba campo não preenchido se não mande todos os dados para os campos recebidos

