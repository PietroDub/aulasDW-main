/*calculadora com inputs */
var num1 = document.GetElementbyid("num1")
var num2 = document.GetElementbyid("num2")
var resultado2 = document.GetElementbyid("resultado2")

var btnSomar = document.getElementById("somar");
var btnSub = document.getElementById("sub");
var btnDiv = document.getElementById("div");
var btnMult = document.getElementById("mult");

btnSomar.addEventListener('click', function(){
    resultado2.textContent = 'Resultado '+ (Number(num1.value) + parseFloat(num2.value));
});

btnSub.addEventListener('click', function(){
    resultado2.textContent = 'Resultado '+ (Number(num1.value) - parseFloat(num2.value));
});

btnDiv.addEventListener('click', function(){
    resultado2.textContent = 'Resultado '+ (Number(num1.value) / parseFloat(num2.value));
});

btnMult.addEventListener('click', function(){
    resultado2.textContent = 'Resultado '+ (Number(num1.value) * parseFloat(num2.value));
});


//===================================================================

var calculo = document.GetElementbyid('calculo');
var resultado = document.GetElementbyid('resultado');
var limpar = document.GetElementbyid('limpar');
var divisao = document.GetElementbyid('divisao');
var multiplicacao = document.GetElementbyid('multiplicacao');
var subtracao= document.GetElementbyid('subtracao');
var soma = document.GetElementbyid('soma');
var igual= document.GetElementbyid('igual');
var n9 = document.GetElementbyid('n9');
var n8 = document.GetElementbyid('n8');
var n7 = document.GetElementbyid('n7');
var n6 = document.GetElementbyid('n6');
var n5 = document.GetElementbyid('n5');
var n4 = document.GetElementbyid('n4');
var n3 = document.GetElementbyid('n3');
var n2 = document.GetElementbyid('n2');
var n1 = document.GetElementbyid('n1');
var n0 = document.GetElementbyid('n0');


var numero1 = '';
var numero2 = '';
var operacao = null;

n0.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n0.textContent;
        calculo.innerText = numero1;
    }else{
        numero2 = numero2 + n0.textContent;
        calculo.innerText + numero1 + '' + operacao + '' + numero2;
    }
})

n1.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n1.textContent;
        calculo.innerText = numero1;
    }else{
        numero2 = numero2 + n1.textContent;
        calculo.innerText + numero1 + '' + operacao + '' + numero2;
    }
})

//-------------

divisao.addEventListener('click', function() {
    operacao = divisao.textContent;
    calculo.innerText + numero1 + "" + operacao + '' + numero2;
})

//--------------

igual.addEventListener('click', function(){
    if(operacao == "/"){
        resultado.innerText = parseFloat(numero1) / parseFloat(numero2);
    }
    else if(operacao == "*"){

    }

    else{
        resultado.innerText = "** ERRO **";
    }
})