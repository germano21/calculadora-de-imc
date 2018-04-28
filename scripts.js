let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let calcular = document.getElementById('calcular');
let mensagem = document.getElementById('mensagem');
let limpar = document.getElementById('limpar');

calcular.onclick = botaoClicado;
limpar.onclick = botaoLimpar;
        
function botaoLimpar(){
    mensagem.textContent = "";
    peso.value = "";
    altura.value = "";
};

function botaoClicado(){
    let imc = peso.value / (altura.value * altura.value);
    // alert('Seu imc é ' + imc.toFixed(1));
    if(imc < 18.5){
        mensagem.textContent = imc.toFixed(1) + ' Você está abaixo do peso recomendado.';
    }; 

    if(imc >= 18.5 && imc <= 24.9){
        mensagem.textContent = imc.toFixed(1) + ' Seu peso está normal.';
    };

    if(imc >= 25.0 && imc <= 29.9){
        mensagem.textContent = imc.toFixed(1) + ' Você está com sobrepeso.';
    };
    
    if(imc >= 30.0 && imc <= 34.9){
        mensagem.textContent = imc.toFixed(1) + ' Você está com obesidade grau I.';
    };

    if(imc >= 35.0 && imc <= 39.9){
        mensagem.textContent = imc.toFixed(1) + ' Você está com obesidade grau II.';
    };

    if(imc > 40.0){
        mensagem.textContent = imc.toFixed(1) + ' Você está com obesidade grau III.';
    };

};