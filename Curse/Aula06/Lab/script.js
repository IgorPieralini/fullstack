let numero_aleatorio =  Math.floor(Math.random(2, 50) * 11)
console.log(numero_aleatorio)

function proposta(){
    numero_digitado = parseInt(document.getElementById("nrm").value);
    console.log(numero_digitado)

    if(numero_aleatorio > numero_digitado){
        document.getElementById("teste").style.setProperty("background-color", "red");
        document.getElementById("teste").innerHTML = "número menor";
        
        let texto = numero_digitado;
        let prima = 0
        valor = document.getElementById("p1").innerHTML;
        document.getElementById("p1").innerHTML = valor + texto + ", ";
    }
    else if(numero_aleatorio == numero_digitado){
        document.getElementById("teste").style.setProperty("background-color", "green");
        document.getElementById("teste").innerHTML = "número igual";
    }
    else{
        document.getElementById("teste").style.setProperty("background-color", "red");
        document.getElementById("teste").innerHTML  = "número maior";
    
        let texto = numero_digitado;
        let prima = 0
        valor = document.getElementById("p2").innerHTML;
        document.getElementById("p2").innerHTML = valor + texto + ", ";
    }
}
