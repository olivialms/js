let palavra;

function inicializaCores(){
  background("Honeydew");//cor de fundo
   fill ("PowderBlue");//preenchimento
  textSize(64);// tamanho da fonte
  textAlign(CENTER,CENTER);//alinha o texto ao centro
}


function setup() {
  createCanvas(400, 400);
  let palavras=["SOU","PERFEITA","MARAVILHOSA"];
  palavra = random(palavras);
}

function draw() { 
 
  inicializaCores();
  //let palavra ="Olívia";//cria variavel
  
  let quantidade=map(mouseX,0, width,0,palavra.length);
  //let quantidade=mao(posição do mouse,0, largura do canva,0, quantidade de letras da palavra);
  let parcial=palavra.substring(0,quantidade);
  text (parcial,200,200);
    
  
    
  }
