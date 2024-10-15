let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")


let retangulo_1 = { 
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor: 'red',
    desenhe: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

let retangulo_2 = { 
    x: 330,
    y: 330,
    largura: 50,
    altura: 50,
    cor: 'red',

    desenhe: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}


function animacao(){
    w_canvas = canvas.getBoundingClientRect()
    ctx.clearRect(0, 0, 400, 400)

    //if(retangulo_1.largura + retangulo_1.x <= 400){
    //    retangulo_1.x += 1;
    //}

    //if(retangulo_2.largura + retangulo_1.x >= 0){
    //    retangulo_2.x -= 1;
    //}
    

    retangulo_1.desenhe();
    retangulo_2.desenhe();

    requestAnimationFrame(animacao)

}

animacao();

document.addEventListener('keydown', function(evento){

    let velocidade = 5;

    let tecla = evento.key;
    console.log(tecla);


    if(tecla == 'ArrowUp'){
        retangulo_1.y -= velocidade;
    }

    if(tecla == 'ArrowDown'){
        retangulo_1.y += velocidade;
    }

    if(tecla == 'ArrowLeft'){
        retangulo_1.x -= velocidade;
    }

    if(tecla == 'ArrowRight'){
        retangulo_1.x += velocidade;
    }
})

document.addEventListener('mousemove', function(evento){

    let rect = canvas.getBoundingClientRect;
    

})