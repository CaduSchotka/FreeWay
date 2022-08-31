//listas
let yCarros = [40,95,150, 210,265,320];
let xCarros = [600,600,600,600,600,600];
let velocidadeCarros = [2,2.5,3.2,3.5,1.9,1.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0 ; i < imagemCarros.length; i++ ){
  image(imagemCarros[i], xCarros[i], yCarros[i],comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0 ; i < imagemCarros.length; i++ ){
    xCarros[i] -= velocidadeCarros[i];  
  }
}

function VoltaPosicicaoInicialDoCarro(){
  for(let i = 0 ; i < imagemCarros.length; i++ ){
    if(passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaTela (xCarro){
  return xCarro < -30;
}
