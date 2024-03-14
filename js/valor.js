var numero = Number(prompt("Digite um número: "));

function valor(numero) {
    
    var numero = parseInt(document.getElementById("numero").value);
    console.log(numero);    
    if (numero == 10) {
        alert("O número é = 10.");
    }
    else if(numero < 10){
        alert("O número é menor que 10.");
    }
    else{
        alert("O número é maior que 10.");
    }
}
