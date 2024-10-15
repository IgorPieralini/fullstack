let can2 = document.getElementById("canvas2")
let cv2 = can2.getContext('2d')

function quadrado(X, Y, largura, altura, pintura){
    cv2.beginPath();
    cv2.lineWidth = 2;
    cv2.strokeStyle = pintura;
    cv2.strokeRect(X,Y,largura,altura);
    cv2.fill();
    cv2.stroke();
    cv2.fillStyle = pintura;
    cv2.fillRect(X,Y,largura,altura);
    cv2.closePath();
}

function line(X,Y,W,Z, pintura){
    cv2.beginPath();
    cv2.lineWidth = 1;
    cv2.strokeStyle = pintura;
    cv2.moveTo(X,Y);
    cv2.lineTo(W,Z);
    cv2.stroke();
    cv2.closePath()
}

function circles(X,Y,tamanho,angini,angfin,pintura, preenchimento='white'){
    cv2.beginPath();
    cv2.lineWidth = 1;
    cv2.strokeStyle = pintura;
    cv2.fillStyle = preenchimento
    cv2.arc(X,Y,tamanho,angini,angfin)
    cv2.fill();
    cv2.stroke();
    cv2.closePath();
}

function letreiro(X,Y,texto, tamanho, cor){
    cv2.beginPath()
    cv2.lineWidth = 1
    cv2.strokeStyle = cor
    cv2.fillStyle = cor
    cv2.font = tamanho + 'px Arial'
    cv2.fillText(texto,X,Y)
    cv2.strokeText(texto,X,Y)
    cv2.closePath()
}

function triangulo(X,Y,W,Z,L,M,N,O,preenchimento='white', cor){
    cv2.beginPath()
    cv2.lineWidth = 1;
    cv2.fillStyle = preenchimento;
    cv2.strokeStyle = cor;
    cv2.moveTo(X,Y);
    cv2.lineTo(W,Z);
    cv2.lineTo(L,M);
    cv2.lineTo(N,O);
    cv2.fill();
    cv2.stroke();
    cv2.closePath()
}

quadrado(0,0,300,300,'aquamarine')
quadrado(0,200,300,150,'grey')
quadrado(0,200,50,100,'lightblue')
quadrado(0,250,100,50,'lightblue')
quadrado(100,100,100,100,'brown')


quadrado(135,150,30,50,'red')

quadrado(105,125,25,25,'blue')
quadrado(170,125,25,25,'blue')

quadrado(65,150,10,50,'brown')
quadrado(245,200,10,50,'brown')


circles(100,300,50,1.5*Math.PI,2.5*Math.PI,'lightblue','lightblue')
circles(0,200,50,Math.PI,0,'lightblue','lightblue')
circles(250,35,35,0,2*Math.PI,'yellow','yellow')
circles(250,200,20,0,2*Math.PI,'green','green')
circles(70,135,20,0,2*Math.PI,'green','green')

triangulo(150,50,100,100,200,100,150,50,'coral', 'coral')