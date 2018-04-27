let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let calcular = document.getElementById('calcular');
let mensagem = document.getElementById('mensagem');
let limpar = document.getElementById('limpar');

calcular.onclick = botaoClicado;
limpar.onclick = botaoLimpar;

function botaoClicado(){
    let imc = peso.value / (altura.value * altura.value);
    // alert('Seu imc é ' + imc.toFixed(1));
    if(imc < 18.5){
        mensagem.textContent = imc.toFixed(1) + ' Você está abaixo do peso recomendado.';
    }; 
    
    if(imc > 18.5){
                mensagem.textContent = imc.toFixed(1) + ' Você está acima do peso.';
    };
};

function botaoLimpar(){
    mensagem.textContent = "";
    peso.value = "";
    altura.value = "";
}
  
    
    




