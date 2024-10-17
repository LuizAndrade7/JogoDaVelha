//Criando a variável para receber quem começa jogando com qual escudo
var player = "X";
var numJog = 0;

function checkjogo(id){
    var opt = verificaSrc(id);
    //Variável para a I.A jogar
    var pc = document.getElementById('cpu').checked;
    const resultDiv= document.getElementById('result')

    if(opt == "transp.png"){
        numJog++;
        document.getElementById(id).src = "img/"+player+".png";
        
        //Definindo o jogador.
        if(player == "X"){
            player = "O";
        }else{
            player = "X";
        }
        //Função para o fim do jogo, ela deverá retornar false.
        if(wincheck()){
            resultDiv.innerHTML= `<p>Fim do jogo! O jogador: <strong>  ${player} </strong> venceu!</p>`;
            return false;
            location.reload();
        }
        //Função para contar as jogadar e saber se deu velha.
        if(numJog>=9){
            resultDiv.innerHTML= 'Fim de jogo!! Deu velha!';
            return false;
            location.reload();
        }

    }
    //Função de jogar sozinho com IA.
    if(pc && player == "O"){
        checkjogo(jogoDoPc());
    }
}

//Função que faz a IA jogar
function jogoDoPc(){
    if(verificaSrc('c5') == "transp.png"){
        return 'c5';
    }
    return 'c'+ Math.floor((Math.random()*9)+1);
}

//Função para verificar o nome a extensão da imagem
function verificaSrc(id){
    var file= document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

//Função para testar as possibilidades nas primeiras casas.
function wincheck(){
    //Linha 1 completa
    if((verificaSrc('c1') == verificaSrc('c2'))&&(verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1')!= "transp.png"){
        return true;
    }
    //Linha 2 completa
    if((verificaSrc('c4') == verificaSrc('c5'))&&(verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4')!= "transp.png"){
        return true;
    }
    //Linha 3 completa
    if((verificaSrc('c7') == verificaSrc('c8'))&&(verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7')!= "transp.png"){
        return true;
    }
    //Coluna 1 completa
    if((verificaSrc('c1') == verificaSrc('c4'))&&(verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1')!= "transp.png"){
        return true;
    }
    //Coluna 2 completa
    if((verificaSrc('c2') == verificaSrc('c5'))&&(verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2')!= "transp.png"){
        return true;
    }
    //Coluna 3 completa
    if((verificaSrc('c3') == verificaSrc('c6'))&&(verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3')!= "transp.png"){
        return true;
    }
    //Diagonal /
    if((verificaSrc('c3') == verificaSrc('c5'))&&(verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3')!= "transp.png"){
        return true;
    }
    //Diagonal \
    if((verificaSrc('c1') == verificaSrc('c5'))&&(verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1')!= "transp.png"){
        return true;
    }
}
