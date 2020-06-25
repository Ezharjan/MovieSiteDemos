// JavaScript Document

function MostraTeclado() {
    var teclado = document.getElementById('teclado').style.visibility;

    if (teclado === 'visible') {
        document.getElementById("teclado").style.visibility = 'hidden';
    } else {
        document.getElementById("teclado").style.visibility = 'visible';
    }
}

function AdicionaTexto(a) {
    document.getElementById("input_Pesquisa").value += a.value;
}

function Remove() {
    var s = document.getElementById("input_Pesquisa").value;
    var string1 = s.substring(0, (s.length - 1));
    document.getElementById("input_Pesquisa").value = string1;
}

function Pesquisa() {
    var texto = document.getElementById("input_Pesquisa").value;
    if (texto == "deadpool 2") {
        document.getElementById("filme1").style.visibility = 'visible';
        document.getElementById("filme2").style.visibility = 'hidden';
        document.getElementById("filme3").style.visibility = 'hidden';
        document.getElementById("filme4").style.visibility = 'hidden';
        document.getElementById('tituloNovosFilmes').innerHTML = "Resultados para: " + texto;

    } else if (texto == "jogador numero 1") {
        document.getElementById("filme2").style.visibility = 'hidden';
        document.getElementById("filme1").style.visibility = 'hidden';
        document.getElementById("filme4").style.visibility = 'hidden';
        document.getElementById("filme3").style.visibility = 'visible';
        document.getElementById('tituloNovosFilmes').innerHTML = "Resultados para: " + texto;
    } else if (texto == "pantera negra") {
        document.getElementById("filme2").style.visibility = 'hidden';
        document.getElementById("filme3").style.visibility = 'hidden';
        document.getElementById("filme1").style.visibility = 'hidden';
        document.getElementById("filme4").style.visibility = 'visible';
        document.getElementById('tituloNovosFilmes').innerHTML = "Resultados para: " + texto;
    } else if (texto == "moonlight") {
        document.getElementById("filme1").style.visibility = 'hidden';
        document.getElementById("filme3").style.visibility = 'hidden';
        document.getElementById("filme4").style.visibility = 'hidden';
        document.getElementById("filme2").style.visibility = 'visible';
        document.getElementById('tituloNovosFilmes').innerHTML = "Resultados para: " + texto;
    } else {
        document.getElementById('tituloNovosFilmes').innerHTML = "Nenhum filme Novo encontrado para: " + texto;
        document.getElementById("filme1").style.visibility = 'visible';
        document.getElementById("filme2").style.visibility = 'visible';
        document.getElementById("filme3").style.visibility = 'visible';
        document.getElementById("filme4").style.visibility = 'visible';
    }

    window.location.href = "#section-conteudo";
}

function CarregaFilme(filme) {
    if (filme == 1) {
        document.getElementById('TituloFilme').innerHTML = "Deadpool 2";
        document.getElementById('ResumoFilme').innerHTML = "Sequência das aventuras do Mercenário Tagarela, interpretado por Ryan Reynolds. Na história original, o herói adquire superpoderes após uma experiência científica, e decide se vingar da pessoa responsável por sequestrar sua namorada.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 17 de maio de 2018 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9733;&#9734;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/1P9OzWX6nzE";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";

    }

    if (filme == 2) {
        document.getElementById('TituloFilme').innerHTML = "Moonlight: Sob a Luz do Luar";
        document.getElementById('ResumoFilme').innerHTML = "Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 24 de fevereiro de 2017 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9733;&#9733;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/9NJj12tJzqc";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

    if (filme == 3) {
        document.getElementById('TituloFilme').innerHTML = "Jogador Nº 1";
        document.getElementById('ResumoFilme').innerHTML = "Em 2044, Wade Watts, assim como o resto da humanidade, prefere a realidade virtual do jogo OASIS ao mundo real. Quando o criador do jogo, o excêntrico James Halliday morre, os jogadores devem descobrir a chave de um quebra-cabeça diabólico para conquistar sua fortuna inestimável. Para vencer, porém, Watts tem de abandonar a existência virtual e ceder a uma vida de amor e realidade da qual sempre tentou fugir.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 29 de março de 2018 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9733;&#9733;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/_BHmun-2sq0";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

    if (filme == 4) {
        document.getElementById('TituloFilme').innerHTML = "Pantera Negra";
        document.getElementById('ResumoFilme').innerHTML = "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 15 de fevereiro de 2018 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9734;&#9734;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/wL4a4MafSjQ";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

    if (filme == 5) {
        document.getElementById('TituloFilme').innerHTML = "Vingadores: Guerra Infinita";
        document.getElementById('ResumoFilme').innerHTML = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 26 de abril de 2018 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9733;&#9733;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/3BXq73F2_z4";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

    if (filme == 6) {
        document.getElementById('TituloFilme').innerHTML = "Maze Runner: A Cura Mortal";
        document.getElementById('ResumoFilme').innerHTML = "Thomas embarca em uma missão para encontrar a cura para uma doença mortal e descobre que os planos da C.R.U.E.L podem trazer consequências catastróficas para a humanidade.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 25 de janeiro de 2018 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9734;&#9734;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/mqUnRDKkRWI";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

    if (filme == 7) {
        document.getElementById('TituloFilme').innerHTML = "Verdade ou Desafio";
        document.getElementById('ResumoFilme').innerHTML = "Olivia, Lucas e um grupo de amigos viajam ao México como uma despedida antes da formatura. Lá, um estranho convence um dos estudantes a jogar um aparentemente inofensivo jogo de verdade ou desafio com os outros. Ao começar, o jogo desperta algo maligno - um demônio que força os amigos a compartilharem segredos sombrios e confrontarem seus medos mais profundos. A regra é simples, porém cruel: fale a verdade ou morra, faça o desafio ou morra, e se parar de jogar, também morre.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 3 de maio de 2018 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9734;&#9734;&#9734;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/WWf6mu03QNM";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

    if (filme == 8) {
        document.getElementById('TituloFilme').innerHTML = "Logan";
        document.getElementById('ResumoFilme').innerHTML = "Em 2024, os mutantes estão em franco declínio, e as pessoas não sabem o real motivo. Uma organização está transformando as crianças mutantes em verdadeiras assassinas. Wolverine, cansado de tudo e a pedido de um cada vez mais enfraquecido Professor Xavier, precisa proteger a jovem e poderosa Laura Kinney, conhecida como X-23. Enquanto isso, o vilão Nathaniel Essex amplia seu projeto de destruição.";
        document.getElementById('DataFilme').innerHTML = "Data de lançamento: 2 de março de 2017 (Brasil)";
        document.getElementById('EstrelasFilme').innerHTML = "Classificacão: &#9733;&#9733;&#9733;&#9733;&#9734;";
        document.getElementById('TrailerFilme').src = "https://www.youtube.com/embed/KPND6SgkN7Q";
        document.getElementById('textTrailer').innerHTML = "Trailer";
        window.location.href = "#capaFilme";
    }

}

var tema;

function IdentificaQuiz(quiz) {
    if (quiz == 1 && tema != "marvel") {
        tema = "marvel";
        window.location.href = "#Perguntas";
        Perguntas();
    }
    if (quiz == 2 && tema != "harry") {
        tema = "harry";
        window.location.href = "#Perguntas";
        Perguntas();
    }
    if (quiz == 3 && tema != "chris") {
        tema = "chris";
        window.location.href = "#Perguntas";
        Perguntas();
    }
    if (quiz == 4 && tema != "morty") {
        tema = "morty";
        window.location.href = "#Perguntas";
        Perguntas();
    }

}

function Perguntas() {
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("proximo").style.visibility = 'hidden';
    document.getElementById("RespA").disabled = false;
    document.getElementById("RespB").disabled = false;
    document.getElementById("RespC").disabled = false;
    document.getElementById("Perguntas").style.visibility = 'visible';

    if (tema == "marvel") {

        var qst = Math.floor(Math.random() * 4);

        if (qst == 0) {
            document.getElementById("Pergunta").innerHTML = "Quais desses personagens a seguir não pertencem ao universo de entretenimento Marvel?";
            document.getElementById("RespA").innerHTML = "Wolverine";
            document.getElementById("RespB").innerHTML = "Tocha Humana";
            document.getElementById("RespC").innerHTML = "Capitao Marvel";
            document.getElementById("Id_Resp").value = "c";
        }
        if (qst == 1) {
            document.getElementById("Pergunta").innerHTML = "Quem comanda a SHIELD?";
            document.getElementById("RespA").innerHTML = "Nick Fury";
            document.getElementById("RespB").innerHTML = "Iron Man";
            document.getElementById("RespC").innerHTML = "Reed Richards";
            document.getElementById("Id_Resp").value = "a";
        }
        if (qst == 2) {
            document.getElementById("Pergunta").innerHTML = "Qual é o nome do duende verde do primeiro filme do Homem-Aranha?";
            document.getElementById("RespA").innerHTML = "Norman Osborn";
            document.getElementById("RespB").innerHTML = "Flash Tompson";
            document.getElementById("RespC").innerHTML = "Harry Osborn";
            document.getElementById("Id_Resp").value = "a";
        }
        if (qst == 3) {
            document.getElementById("Pergunta").innerHTML = "Qual é o verdadeiro nome do Demolidor?";
            document.getElementById("RespA").innerHTML = "Matt Murdock";
            document.getElementById("RespB").innerHTML = "Reed Richards";
            document.getElementById("RespC").innerHTML = "Jhonny Blaze";
            document.getElementById("Id_Resp").value = "a";
        }

    }
    if (tema == "harry") {

        var qst = Math.floor(Math.random() * 4);

        if (qst == 0) {
            document.getElementById("Pergunta").innerHTML = "Nick-Quase-Sem-Cabeça é fantasma de que casa em Hogwarts?";
            document.getElementById("RespA").innerHTML = "Grifinoria";
            document.getElementById("RespB").innerHTML = "Corvinal";
            document.getElementById("RespC").innerHTML = "Sonserina";
            document.getElementById("Id_Resp").value = "a";
        }
        if (qst == 1) {
            document.getElementById("Pergunta").innerHTML = "Qual é o nome completo de Harry?";
            document.getElementById("RespA").innerHTML = "Harry Tiago Potter";
            document.getElementById("RespB").innerHTML = "Harry Severo Potter";
            document.getElementById("RespC").innerHTML = "Harry Potter";
            document.getElementById("Id_Resp").value = "a";
        }
        if (qst == 2) {
            document.getElementById("Pergunta").innerHTML = "Antes de ir para Hogwarts, onde Harry Potter vivia?";
            document.getElementById("RespA").innerHTML = "Em um orfanato";
            document.getElementById("RespB").innerHTML = "Na casa de seus tios, sr. e sra. Dursley.";
            document.getElementById("RespC").innerHTML = "Na casa de sua mãe";
            document.getElementById("Id_Resp").value = "b";
        }
        if (qst == 3) {
            document.getElementById("Pergunta").innerHTML = "O que significa AD?";
            document.getElementById("RespA").innerHTML = "Alvo Dumbledore.";
            document.getElementById("RespB").innerHTML = "Armada de Draco.";
            document.getElementById("RespC").innerHTML = "Armada de Dumbledore.";
            document.getElementById("Id_Resp").value = "c";
        }
    }
    if (tema == "chris") {

        var qst = Math.floor(Math.random() * 4);

        if (qst == 0) {
            document.getElementById("Pergunta").innerHTML = "Qual era o nome do primeiro(a) diretor(a) de Chris na Escola Secundária Corleone?";
            document.getElementById("RespA").innerHTML = "Srtª Morello";
            document.getElementById("RespB").innerHTML = "Sr. Omar";
            document.getElementById("RespC").innerHTML = "Sr. Reymond";
            document.getElementById("Id_Resp").value = "c";
        }
        if (qst == 1) {
            document.getElementById("Pergunta").innerHTML = "Qual era o nome do namorado de Tasha que termina com ela no episódio Todo mundo odeia Páscoa, da 3ª temporada?";
            document.getElementById("RespA").innerHTML = "Jerome";
            document.getElementById("RespB").innerHTML = "Drew";
            document.getElementById("RespC").innerHTML = "Robert";
            document.getElementById("Id_Resp").value = "c";
        }
        if (qst == 2) {
            document.getElementById("Pergunta").innerHTML = "1982 é o ano em que Chris fez:";
            document.getElementById("RespA").innerHTML = "10 anos";
            document.getElementById("RespB").innerHTML = "13 anos";
            document.getElementById("RespC").innerHTML = "15 anos";
            document.getElementById("Id_Resp").value = "b";
        }
        if (qst == 3) {
            document.getElementById("Pergunta").innerHTML = "No episódio Todo mundo odeia matemática, da 2ª temporada, a turma de Chris não ganha pizza porque";
            document.getElementById("RespA").innerHTML = "Chris colou na prova";
            document.getElementById("RespB").innerHTML = "Chris faltou no dia da prova";
            document.getElementById("RespC").innerHTML = "Chris respondeu as perguntas do exame nas linhas erradas e consequentemente zerou a sua prova";
            document.getElementById("Id_Resp").value = "c";
        }

    }
    if (tema == "morty") {

        var qst = Math.floor(Math.random() * 4);

        if (qst == 0) {
            document.getElementById("Pergunta").innerHTML = "Quantos episódios tem a segunda temporada de rick and morty?";
            document.getElementById("RespA").innerHTML = "12";
            document.getElementById("RespB").innerHTML = "11";
            document.getElementById("RespC").innerHTML = "10";
            document.getElementById("Id_Resp").value = "c";
        }
        if (qst == 1) {
            document.getElementById("Pergunta").innerHTML = "Qual o episódio em que o rick se transforma em um picles?";
            document.getElementById("RespA").innerHTML = "Temp 3 ep 2";
            document.getElementById("RespB").innerHTML = "Temp 3 ep 7";
            document.getElementById("RespC").innerHTML = "Temp 3 ep 3";
            document.getElementById("Id_Resp").value = "c";
        }
        if (qst == 2) {
            document.getElementById("Pergunta").innerHTML = "Qual o nome da espécie das cabeças gigantes no episódio planeta música?";
            document.getElementById("RespA").innerHTML = "Giants";
            document.getElementById("RespB").innerHTML = "Cronenbergs";
            document.getElementById("RespC").innerHTML = "Cromulons";
            document.getElementById("Id_Resp").value = "c";
        }
        if (qst == 3) {
            document.getElementById("Pergunta").innerHTML = "Qual o nome da dança que o tiny rick inventa durante o baile? (Em inglês)";
            document.getElementById("RespA").innerHTML = "Help me I'm gonna die";
            document.getElementById("RespB").innerHTML = "I'm old";
            document.getElementById("RespC").innerHTML = "Let me out";
            document.getElementById("Id_Resp").value = "c";
        }
    }
}

function Limpa() {
    Perguntas();
}

function Corrige(valor) {
    var resposta = document.getElementById("Id_Resp").value;
    if (valor.value == resposta) {
        document.getElementById("feedback").style.color = "#4ECB29";
        document.getElementById("feedback").innerHTML = "Correto";
        document.getElementById("RespA").disabled = true;
        document.getElementById("RespB").disabled = true;
        document.getElementById("RespC").disabled = true;
        document.getElementById("proximo").innerHTML = "Proximo";
        document.getElementById("proximo").style.visibility = 'visible';
        document.getElementById("proximo").value = "Proximo";
    } else {
        document.getElementById("feedback").style.color = "#D03D3F";
        document.getElementById("feedback").innerHTML = "Errado";
        document.getElementById("RespA").disabled = true;
        document.getElementById("RespB").disabled = true;
        document.getElementById("RespC").disabled = true;
        document.getElementById("proximo").innerHTML = "Proximo";
        document.getElementById("proximo").style.visibility = 'visible';
        document.getElementById("proximo").value = "Proximo";

    }
}