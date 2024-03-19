let apagada = document.getElementById('apagada')
        let ligada = document.getElementById('ligada')
        let quebrada = document.getElementById('luzquebrada')
        

        apagada.addEventListener('mouseenter', sair)
        ligada.addEventListener('mouseout', sairligada)
        ligada.addEventListener('click', quebrar)
    
        
      
     
        
      
        function quebrar(){
            ligada.style.display = 'none'
            apagada.style.display = 'none'
            quebrada.style.display =' block'
            apagada.style.width = '0px'
           
        }
         
        function sair(){
            apagada.style.display = 'none'
            ligada.style.display = 'block'
        }

        function sairligada(){
            ligada.style.display = 'none'
            apagada.style.display = 'block'

        }
        