let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  
  imagemCarros = [imagemDoCarro,imagemDoCarro2,imagemDoCarro3,imagemDoCarro,imagemDoCarro2,imagemDoCarro3];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somPonto = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}