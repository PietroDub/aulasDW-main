document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém referências aos elementos do DOM
    const form = document.getElementById('formNumero');
    const inputNumero1 = document.getElementById('inputNumero1');
    const inputNumero2 = document.getElementById('inputNumero2');
    const resultadoElement = document.getElementById('resultado');
    
    // Adiciona o listener de submit ao formulário
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();
        
        // Obtém e trata os valores dos inputs
        const valor1 = inputNumero1.value.trim();
        const valor2 = inputNumero2.value.trim();
        
        // Valida se os campos estão preenchidos
        if (!valor1 || !valor2) {
            alert('Por favor, preencha ambos os campos!');
            return;
        }
        
        // Converte para números
        const numero1 = Number(valor1);
        const numero2 = Number(valor2);
        
        // Realiza a operação matemática
        const soma = numero1 + numero2;
        const sub = numero1 - numero2;
        const div = numero1 / numero2;
        const mult = numero1 * numero2;
        
        // Exibe o resultado formatado
        document.getElementById('calcular').addEventListener('click', function() {
            resultadoElement.textContent = `Resultado: ${soma}`;
        });
        
        // Botão 2
        document.getElementById('calcularMenos').addEventListener('click', function() {
            resultadoElement.textContent = `Resultado: ${sub}`;
        });
        
        document.getElementById('calcularDiv').addEventListener('click', function() {
            resultadoElement.textContent = `Resultado: ${div}`;
        });
        
        document.getElementById('calcularMult').addEventListener('click', function() {
            resultadoElement.textContent = `Resultado: ${mult}`;
        });

        // Limpa os campos 
        inputNumero1.value = '';
        inputNumero2.value = '';
        
    });
});
