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

    //inserindo dados no array
    formContato.addEventListener("submit", (event) => {
    event.preventDefault()
    nome.push(formContato.nome.value)
    email.push(formContato.email.value)
    telefone.push(formContato.telefone.value)
    assunto.push(formContato.assunto.value)
    msg.push(formContato.mensagem.value)
    gerarLista()
    formContato.reset()
    })

    function gerarLista(){
    let auxLista = ""

    for(let posicao = 0 ; posicao < nome.length ; posicao++){
    auxLista += `
    <div class="card">

    <div class="dados-label">
        <div>Nome Completo:</div>
        <div>${nome[posicao]}</div>
    </div>

    <div class="dados-label">
        <div>Email:</div>
        <div>${email[posicao]}</div>
    </div>

    <div class="dados-label">
        <div>Telefone:</div>
        <div>${telefone[posicao]}</div>
    </div>

    <div class="dados-label">
         <div>assunto:</div>
         <div>${assunto[posicao]}</div>
    </div>

    <div class="dados-label">
        <div>Mensagem:</div>
        <div>${msg[posicao]}</div>
    </div>

    </div>`
    }

    divLista.innerHTML = auxLista;
    }