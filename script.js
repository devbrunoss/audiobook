const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    console.log("Clicou!");
    audio.play();
    taTocando = true;
    botaoPlayPause.classList.add("tocando");
    console.log("Deu play!");
}

function pausarFaixa() {
    console.log("Clicou!");
    audio.pause();
    taTocando = false;
    botaoPlayPause.classList.remove("tocando");
    console.log("Deu pause!");
}

function tocarOuPausar() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function trocarNomeCapitulo() {
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function proximoCapitulo() {
    if (capituloAtual < qtdCapitulos) {
        capituloAtual = capituloAtual + 1;
    } else {
        capituloAtual = 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    trocarNomeCapitulo();
    tocarFaixa();
}

function capituloAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = qtdCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    trocarNomeCapitulo();
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);