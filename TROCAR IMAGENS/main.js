"use strict";

const botaoTrocarImagem = document.getElementById('trocar-imagem');

const imagens = [
    'url("imagens/salmo.jpg")',
    'url("imagens/isaias.jpg")',
    'url("imagens/mateus.jpg")',
    'url("imagens/proverbios.jpg")'
];

let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.documentElement.style.setProperty('--fundo-imagem', imagens[indiceAtual]);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);
