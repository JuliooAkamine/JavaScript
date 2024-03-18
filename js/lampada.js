
function passar(){
    document.getElementById('apagada').style.display = 'none'
    document.getElementById('ligada').style.display = 'block'
    
}

function sair(){
    document.getElementById('apagada').style.display = 'block'
    document.getElementById('ligada').style.display = 'none'
}

function quebrar(){
    document.getElementById('apagada').style.width = '0px'
    document.getElementById('ligada').style.display = 'none'
    document.getElementById('quebrada').style.display = 'block'
}

function resetar(){
    document.getElementById('apagada').style.display = 'block'
    document.getElementById('apagada').style.width = '300px'
    document.getElementById('quebrada').style.display = 'none'
}
