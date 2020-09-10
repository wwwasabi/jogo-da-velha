var jogo = []; //guarda as posições do jogo
var tabuleiro = []; //controla elementos vizuais
var quemJoga = 0; //0 - Jogador  / 1 - CPU
var verifica;
var jogando = true;
var nivel = 2;
var jogadaCpu = 1;
var quemComeca = 1;
var jogada = 0;

function cpuJoga() {
    //Jogada da CPU
    if (jogando) {
        var l, c;
        if (nivel == 1) {
            do {
                l = Math.round(Math.random() * 2);
                c = Math.round(Math.random() * 2);
            } while (jogo[l][c] != "");
            jogo[l][c] = "O";
        } else if (nivel == 2) {
            //ATAQUE
            //Jogadas Linha 1
            if ((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else if ((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")) {
                jogo[0][1] = "O";
            } else if ((jogo[0][1] == "O") && (jogo[0][2] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
            //Jogadas Linha 2
            if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")) {
                jogo[1][2] = "O";
            } else if ((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[1][1] == "O") && (jogo[1][2] == "O") && (jogo[1][0] == "")) {
                jogo[1][0] = "O";
            } else
            //Jogadas Linha 3
            if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")) {
                jogo[2][2] = "O";
            } else if ((jogo[2][0] == "O") && (jogo[2][2] == "O") && (jogo[2][1] == "")) {
                jogo[2][1] = "O";
            } else if ((jogo[2][1] == "O") && (jogo[2][2] == "O") && (jogo[2][0] == "")) {
                jogo[2][0] = "O";
            } else
            //Jogadas Coluna 1
            if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")) {
                jogo[2][0] = "O";
            } else if ((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")) {
                jogo[1][0] = "O";
            } else if ((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
            //Jogadas Coluna 2
            if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")) {
                jogo[2][1] = "O";
            } else if ((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")) {
                jogo[0][1] = "O";
            } else
            //Jogadas Coluna 3
            if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")) {
                jogo[2][2] = "O";
            } else if ((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")) {
                jogo[1][2] = "O";
            } else if ((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else
            //Jogadas Diagonal 1
            if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")) {
                jogo[2][2] = "O";
            } else if ((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[1][1] == "O") && (jogo[2][2] == "O") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
            //Jogadas Diagonal 2
            if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")) {
                jogo[2][0] = "O";
            } else if ((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else

            //DEFESA
            //Jogadas Linha 1
            if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")) {
                jogo[0][1] = "O";
            } else if ((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
            //Jogadas Linha 2
            if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")) {
                jogo[1][2] = "O";
            } else if ((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[1][1] == "X") && (jogo[1][2] == "X") && (jogo[1][0] == "")) {
                jogo[1][0] = "O";
            } else
            //Jogadas Linha 3
            if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "O";
            } else if ((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "O";
            } else if ((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O";
            } else
            //Jogadas Coluna 1
            if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O";
            } else if ((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[1][0] == "")) {
                jogo[1][0] = "O";
            } else if ((jogo[1][0] == "X") && (jogo[2][0] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
            //Jogadas Coluna 2
            if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "O";
            } else if ((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")) {
                jogo[0][1] = "O";
            } else
            //Jogadas Coluna 3
            if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "O";
            } else if ((jogo[0][2] == "X") && (jogo[2][2] == "X") && (jogo[1][2] == "")) {
                jogo[1][2] = "O";
            } else if ((jogo[1][2] == "X") && (jogo[2][2] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else
            //Jogadas Diagonal 1
            if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "O";
            } else if ((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[1][1] == "X") && (jogo[2][2] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "O";
            } else
            //Jogadas Diagonal 2
            if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O";
            } else if ((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "O";
            } else if ((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "O";
            } else {
                if (jogada < 8) {
                    do {
                        l = Math.round(Math.random() * 2);
                        c = Math.round(Math.random() * 2);
                    } while (jogo[l][c] != "");
                    jogo[l][c] = "O";
                } else {
                    for (var l = 0; l < 3; l++) {
                        for (var c = 0; c < 3; c++) {
                            if (jogo[l][c] == "") {
                                jogo[l][c] = "O";
                            }
                        }
                    }
                }
            }
        }

        //Verifica se venceu, se sim, o jogo termina
        verifica = verificaVitoria();
        if (verifica != "") {
            alert(verifica + " venceu!");
            jogando = false;
        }
        atualizaTabuleiro();
        jogada++;
        quemJoga = 0;
    }
}

function verificaVitoria() {
    var l, c;
    //Verifica se a linha está completa
    for (l = 0; l < 3; l++) {
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])) {
            return jogo[l][0];
        }
    }
    //Verifica se a Coluna está completa
    for (c = 0; c < 3; c++) {
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])) {
            return jogo[0][c];
        }
    }
    //Verifica se a Diagonal está completa
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0];
    }
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {
        return jogo[0][2];
    }
    return "";
}

function jogar(posicao) {
    //Verifica se é o jogador que está jogando
    if ((jogando) && (quemJoga == 0)) {
        switch (posicao) {
            //Verifica se essa posição pode ser jogada
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;
            default: //caso 9
                if (jogo[2][2] == "") {
                    jogo[2][2] = "X";
                    quemJoga = 1; //Passa a vez pra CPU
                }
                break;

        }
        //Verifica se a jogada foi valida, caso não, repete o switch
        if (quemJoga == 1) {
            atualizaTabuleiro();
            //Verifica se venceu, se sim, o jogo termina
            verifica = verificaVitoria();
            if (verifica != "") {
                alert(verifica + " venceu!");
                jogando = false;
            }
            jogada++;
            cpuJoga();
        }
    }
}

function atualizaTabuleiro() {
    //Percorre a  matriz jogo e atualiza a matriz tabuleiro
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            if (jogo[l][c] == "X") {
                tabuleiro[l][c].innerHTML = "X"; //preenche a div com X
                tabuleiro[l][c].style.cursor = "default"; //Muda o cursor pra setinha
            } else if (jogo[l][c] == "O") {
                tabuleiro[l][c].innerHTML = "O";
                tabuleiro[l][c].style.cursor = "default"
            } else {
                //Atualiza o tabuleiro
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

function inicia() {
    jogando = true;
    jogada = 0;
    jogadaCpu = 1;
    jogo = [ //zera tudo da matriz
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if (quemComeca == 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("dvQuemComeca").innerHTML = "Quem começa é o: Jogador"
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("dvQuemComeca").innerHTML = "Quem começa é a: CPU"
        cpuJoga();
    }

}

window.addEventListener("load", inicia);