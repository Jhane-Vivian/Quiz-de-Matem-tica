//Definindo a função chamada quando ocorre o evento de clique no botão entrar
function entrar()
{
    //Declarando uma variável para atribui-la o nome do jogador 1 inserida na input de id nomeJogador1
    nomeDoJogador1 = document.getElementById("nomeJogador1").value;

    //Declarando uma variável para atribui-la o nome do jogador 2 inserida na input de id nomeJogador2
    nomeDoJogador2 = document.getElementById("nomeJogador2").value;

    //Acessando o Armazenamento localdo dispositivo para armazenar o nome do jogador 1
    localStorage.setItem("Jogador1", nomeDoJogador1);

    //Acessando o Armazenamento localdo dispositivo para armazenar o nome do jogador 1
    localStorage.setItem("Jogador2", nomeDoJogador2);

    //Redirecionando a página
    window.location = "game.html";

}