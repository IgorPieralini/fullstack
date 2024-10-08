 
let nome = "Player";
let idade = 20;
let ano_atual = 2024;
let ano_nascimento = ano_atual - idade;

let resposta = "Olá " + nome + ", o seu ano de nascimento é: "+ ano_nascimento;
document.getElementById("r1").innerHTML = resposta;

function exibeMensagem(texto){
    alert(texto)
}

function soma(a, b){
    return a + b;
}

function multa(a, b){
    return a * b;
}

let c = soma(4, 5);
document.getElementById("r2").innerHTML = c;

function exs2(){
    let numero = parseInt(document.getElementById("ex2").value);
    resposta = multa(numero, 3)
    document.getElementById("r3").innerHTML = resposta;
}

function exsd(){
    let numero = parseInt(document.getElementById("ex3_1").value);
    let numero2 = parseInt(document.getElementById("ex3_2").value);
    resposta = soma(numero, numero2);
    
    if (isNaN(resposta)){
        resposta = 0;
    }
    document.getElementById("pt").value = resposta;
}

function exsd2(){
    let numero = parseInt(document.getElementById("ex3_1").value);
    let numero2 = parseInt(document.getElementById("ex3_2").value);
    resposta = soma(numero, numero2);
    
    if (isNaN(resposta)){
        resposta = 0;
    }
    document.getElementById("pt").value = resposta;
}

function exsd3(){
    let numero = parseInt(document.getElementById("ex4_1").value);
    let numero2 = parseInt(document.getElementById("ex4_2").value);
    resposta = soma(numero, numero2);
    resposta2 = multa(numero, numero2)
    
    if(numero < 0 || numero2 < 0){
        if (isNaN(resposta)){
            resposta = 0;
        }
        document.getElementById("pt2").value = resposta;
    }else{
        if (isNaN(resposta)){
            resposta = 0;
        }
        document.getElementById("pt2").value = resposta2;
    }
}

function teste(){
    a = Math.floor(Math.random() * 11)
    document.getElementById("pt3").value = a;
}



