var btncalculo = document.getElementById('calculo')
var btntema = document.getElementById('tema')



btntema.addEventListener('click', function(){

    document.getElementById('container-form').style.backgroundColor = 'darkslategray'
    document.getElementById('container-result').style.backgroundColor = 'darkslategray'
    
   

})




btncalculo.addEventListener('click' , function(){


var name = document.getElementById('name').value
var serie = document.getElementById('serie').value
var materia = document.getElementById('materia').value

var b1 = parseFloat(document.getElementById('b1').value)
var b2 = parseFloat(document.getElementById('b2').value)
var b3 = parseFloat(document.getElementById('b3').value)
var b4 = parseFloat(document.getElementById('b4').value)

var media = parseFloat(document.getElementById('media').value)

var nomerecebido = document.getElementById('nomerecebido')
var serierecebido = document.getElementById('serierecebido')
var materiarecebido = document.getElementById('materiarecebido')
var b1recebido = document.getElementById('b1recebido')
var b2recebido = document.getElementById('b2recebido')
var b3recebido = document.getElementById('b3recebido')
var b4recebido = document.getElementById('b4recebido')
var mediarecebido = document.getElementById('mediarecebido')
var situacao = document.getElementById('situacao')

var bimestressomados = b1 + b2 + b3 + b4



if(b1 , b2 , b3 , b4, media  >10 ){
    alert('A nota máxima permitida é 10')
}else{   

nomerecebido.innerHTML = name
serierecebido.innerHTML = serie
materiarecebido.innerHTML = materia
b1recebido.innerHTML = b1
b2recebido.innerHTML = b2
b3recebido.innerHTML = b3
b4recebido.innerHTML = b4
mediarecebido.innerHTML = (bimestressomados / 4).toFixed(2)
if(mediarecebido.innerHTML >= media)
{
    situacao.innerHTML = 'Aprovado'
}else{
    situacao.innerHTML = 'Reprovado'
}
}


})