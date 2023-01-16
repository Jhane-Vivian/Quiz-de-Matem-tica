//Declarando uma variável para armazenar o nome do jogador 1
jogador1 = localStorage.getItem("Jogador1");

//Declarando uma variável para armazenar o nome do jogador 2
jogador2 = localStorage.getItem("Jogador2");

// Declarando uma variável para armazenar o placar do jogador 1
placarJogador1 = 0;

// Declarando uma variável para armazenar o placar do jogador 2
placarJogador2 = 0;

//Adicionando o nome do jogador 1 na tela
document.getElementById("nomePlacarJogador1").innerHTML = jogador1;

//Adicionando o nome do jogador 2 na tela
document.getElementById("nomePlacarJogador2").innerHTML = jogador2;

//Adicionando o placar do jogador 1 na tela
document.getElementById("placarJogador1").innerHTML = placarJogador1;

//Adicionando o placar do jogador 2 na tela
document.getElementById("placarJogador2").innerHTML = placarJogador2;

//Definindo o turno da pergunta e exibindo na tela
document.getElementById("turnoPergunta").innerHTML = "Turno da Pergunta: " + jogador1;

//Definindo o turno da resposta e exibindo na tela
document.getElementById("turnoResposta").innerHTML = "Turno da Resposta: " + jogador2;

function enviar()
{

    //Declarando uma variável para armazenar o número 1 inserido na input
    numero1 = document.getElementById("numero1").value;

    //Declarando uma variável para armazenar o número 2 inserido na input
    numero2 = document.getElementById("numero2").value;

    //Declarando uma variável para armazenar a multiplicação
    resultadoDaMultiplicação = Number(numero1) * Number(numero2);

    console.log(resultadoDaMultiplicação);


    //Declarando uma variável que exibe a pergunta na div saida
    pergunta = "<h3>" + numero1 + "x" + numero2 + "</h3>";

    //Declarando uma variável que exibe a input para o jogador responder na div saida 
    respostaInput = "<br> <input type='text' id='respostaInserida' placeholder='Digite a resposta aqui ...'>";
    
    //Declarando uma variável que exibe um botão na div saida
    botao = "<br><br><br> <button class='btn btn-info' onclick='enviarResposta()'>Checar</button>";

    //Declarando uma variável que armazena tudo
    tudo = pergunta + respostaInput + botao;

    //Exibindo tudo na div saida
    document.getElementById("saida").innerHTML = tudo;

    //Limpando as inputs da pergunta
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";

}

//Declarando uma variável para armazenar o turno da pergunta
turnoPergunta = "player1";

//Declarando uma variável para armazenar o turno da resposta
turnoResposta = "player2";

function enviarResposta()
{

    //Declarando uma variável para armazenar a resposta inserida
    respostaPlayer = document.getElementById("respostaInserida").value;

    //Condicional para verificar se a resposta está correta
    if(respostaPlayer == resultadoDaMultiplicação)
    {
        //Condicionais para verificar de quem é o ponto
        if(turnoResposta =="player1")
        {
            placarJogador1 = placarJogador1 +1;
            document.getElementById("placarJogador1").innerHTML = placarJogador1;
        }else{
            {
                placarJogador2 = placarJogador2 +1;
                document.getElementById("placarJogador2").innerHTML = placarJogador2;
            }
        }

    }
    //Condicionais para mudar de turno
    if(turnoPergunta == "player1")
    {
        turnoPergunta ="player2";
        document.getElementById("turnoPergunta").innerHTML="Turno da Pergunta: " + jogador2;
    }else{
        turnoPergunta ="player1";
        document.getElementById("turnoPergunta").innerHTML="Turno da Pergunta: " + jogador1;
    }


    if(turnoResposta == "player1")
    {
        turnoResposta ="player2";
        document.getElementById("turnoResposta").innerHTML="Turno da Resposta: " + jogador2;
    }else{
        turnoResposta ="player1";
        document.getElementById("turnoResposta").innerHTML="Turno da Resposta: " + jogador1;
    }
    document.getElementById("saida").innerHTML="";
    
}
