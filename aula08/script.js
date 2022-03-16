
window.onload = function() {
    // 3 - Mostre um alerta na página quando a tela terminar de ser carregada.
    alert('Bem-vindo');
    
    // 2 - Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    
    // 4 - Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
    const texto = document.querySelector("h1");
    texto.addEventListener("mouseover", function(){
        texto.style.color = 'blue';
    });

    texto.addEventListener("mouseout", function(){
        texto.style.color = 'red';
    });

    // Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .
    const input = document.querySelector('input');
    const conteudo = document.querySelector('#conteudo');
    
    // Contador aqui
    // let contador = 0;
    
    input.addEventListener('keyup', (event) => {
        // Adiciona o conteudo digitado no campo ao parágrafo
        conteudo.textContent = input.value;
        
        // Seleciona o parágrafo onde vai sair o resultado do contador
        const pContador = document.querySelector('#contador');
        
        // Substitui o conteúdo do parágrafo pelo comprimento do texto no input
        pContador.textContent = input.value.length;
    });

    body.addEventListener('pointerleave', () => {
        alert('Sai não');
    });
}