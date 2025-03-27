// const define a variável como constante (não pode ser alterada, 
// neste caso, não pode trocar de elemento do html)

const form = document.getElementById('formTarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('listaTarefas');

// addEventListener adiciona uma "escuta" a um evento de elemento html
// 'subit' é o evento que ocorre quando o formulário é enviado
// function(event) cria a função que será executada quando o evento ocorrer
// event é a variável que armazena as informações do evento que ocorreu  

form.addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado e a página recarregada
    event.preventDefault();

    // Armazena o valor do input na variável
    const textoTarefa = input.value.trim(); // trim() remove os espaços vazios do começo e do fim do texto

    if (textoTarefa != '') {
        // Cria um elemento html do tipo li
        const li = document.createElement('li');
        // Adiciona o texto do input no elemento li
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        // Adiciona a classe remover ao botão criado
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click', function() {
            // Remove o elemento li da lista se o botão for clicado
            lista.removeChild(li);
        });
        // Adiciona o botão Remover ao elemento li
        li.appendChild(botaoRemover);
        // Adiciona o elemento li a lista de tarefas
        lista.appendChild(li);
        // Limpa o valor do input
        input.value = '';
    }
});