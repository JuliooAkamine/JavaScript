let btnenviar = document.getElementById('btnenviar')
let btncadastro = document.getElementById('btncadastro')
let btnlogin = document.getElementById('btnlogin')

btnlogin.addEventListener('click', function(){
    let emaillogin = document.getElementById('emaillogin').value
    let senhalogin = document.getElementById('senhalogin').value
    let containerlogin = document.getElementById('login')

    let emailcadastro = document.getElementById('emailcadastro').value
    let senhacadastro = document.getElementById('senhacadastrada').value
    let containercadastro = document.getElementById('cadastro')

    if(emaillogin === emailcadastro && senhalogin === senhacadastro ){
        alert('login feito com sucesso')

        containerlogin.style.display = 'none'

        document.getElementById('container-form').style.display = 'flex'

    }else{
        alert('email ou senha incorreto')
    }

 

   

})

btnenviar.addEventListener('click' , function(){

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let assunto = document.getElementById('assunto').value
    let mensagem = document.getElementById('mensagem').value

    let name_recebido = document.getElementById('name_recebido')
    let email_recebido = document.getElementById('email_recebido')
    let number_recebido = document.getElementById('number_recebido')
    let assunto_recebido = document.getElementById('assunto_recebido')
    let mensagem_recebido = document.getElementById('mensagem_recebido')

    name_recebido.innerHTML = name
    email_recebido.innerHTML = email
    number_recebido.innerHTML = number
    assunto_recebido.innerHTML = assunto
    mensagem_recebido.innerHTML = mensagem


})


btncadastro.addEventListener('click' , function(){

    let emailcadastro = document.getElementById('emailcadastro').value
    let senhacadastro = document.getElementById('senhacadastrada').value
    let containerlogin = document.getElementById('login')
    let containercadastro = document.getElementById('cadastro')


    if(emailcadastro,senhacadastro === ''){
        alert('preencha seus dados para continuar o cadastro')
    }else{

      
    alert('Email e senha cadastrados')

    containerlogin.style.display = 'flex'
    containercadastro.style.display = 'none'


    }
 
})

