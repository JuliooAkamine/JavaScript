let vetor = []
for(let posicao = 0 ; posicao<vetor.length; posicao++){
    alert(vetor[posicao])
}

let formContato = document.getElementById("form-contato");
let divLista = document.getElementById("lista");

let nome =  [];
let email = [];
let telefone = [];
let assunto = [];
let msg = [];

formContato.addEventListener("submit", (event) => {
    event.preventDefault()
    nome.push(formContato.nome.value)
    email.push(formContato.email.value)
    telefone.push(formContato.telefone.value)
    assunto.push(formContato.assunto.value)
    msg.push(formContato.mensagem.value)
    gerarLista()
})