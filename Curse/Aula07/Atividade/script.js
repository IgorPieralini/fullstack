let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

function quadrado(x, y, largura, altura, cor_linha, cor_preenchimento, grossura){
    ctx.beginPath();
    ctx.lineWidth = grossura;
    ctx.fillStyle = cor_preenchimento;
    ctx.strokeStyle = cor_linha;
    ctx.fillRect(x, y, largura, altura);
    ctx.strokeRect(x, y, largura, altura);
    ctx.closePath();
}


function circulo(x, y, tamanho, cor_linha, cor_preenchimento, math, math2){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = cor_preenchimento;
    ctx.strokeStyle = cor_linha;
    ctx.arc(x, y, tamanho, math, math2);
    ctx.fill();
    ctx.stroke();
}

function linha(movex1, movey1, linex1, liney1, linex2, liney2, color){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.moveTo(movex1, movey1)
    ctx.lineTo(linex1, liney1)
    ctx.lineTo(linex2, liney2)
    ctx.stroke();
}

function texto(color, color1, font, texto, line, n1, n2){
    ctx.beginPath();
    ctx.lineWidth = line;
    ctx.strokeStyle = color;
    ctx.fillStyle = color1;
    ctx.font = font;
    ctx.strokeText(texto, n1, n2);
    ctx.fill();
    ctx.closePath();
}

quadrado(20, 20, 460, 460, 'black', 'white', 1)
quadrado(21, 21, 60, 60, 'blue', 'blue')
quadrado(420, 21, 60, 60, 'red', 'red')

quadrado(21, 439, 40, 40, 'yellow', 'yellow')
quadrado(21, 399, 40, 40, 'yellow', 'yellow')
quadrado(61, 439, 40, 40, 'yellow', 'yellow')

quadrado(439, 439, 40, 40, 'black', 'black')
quadrado(439, 399, 40, 40, 'black', 'black')
quadrado(399, 439, 40, 40, 'black', 'black')

quadrado(21, 210, 40, 80, 'aqua', 'aqua')
quadrado(439, 230, 40, 30, 'aqua', 'aqua')

circulo(249, 480, 60, 'green', 'cyan', 3*Math.PI, 4*Math.PI)

circulo(125, 365, 20, 'green', 'yellow', 4*Math.PI, 2*Math.PI)
circulo(375, 365, 20, 'green', 'yellow', 4*Math.PI, 2*Math.PI)

circulo(249, 249, 75, 'green', 'transparent', 4*Math.PI, 2*Math.PI)

circulo(249, 479, 110, 'green', 'transparent', 1*Math.PI, 1.5*Math.PI )
circulo(249, 479, 90, 'green', 'transparent', 1.5*Math.PI, 2*Math.PI)

linha(249, 419, 249, 419, 249, 249, 'gray')
linha(21, 249, 21, 249, 479, 249, 'green')

linha(249, 249, 249, 249, 40, 40, 'blue')
linha(249, 249, 249, 249, 460, 40, 'red')

circulo(249, 249, 100, 'green', 'transparent', Math.PI, Math.PI + Math.PI / 4)
circulo(249, 249, 100, 'green', 'transparent', 1.75*Math.PI, 2*Math.PI)

texto('black', 'black', '40px Arial', 'Canvas', 2, 179, 110)
