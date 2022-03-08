let darkMode = () => {

    // Salva o body em uma variável
    let body = document.querySelector('body');

    // Salva o ícone do Toggle em uma variável
    let toggleBtn = document.querySelector('.bi');
    let toggleTxt = document.querySelector('.toggle > span');

    // Faz o corpo mudar para o modo claro/escuro
    body.classList.toggle('dark');
    toggleTxt.innerText = 'Modo Claro';
    
    // Altera o ícone de acordo com o modo
    if(body.classList.contains('dark')) {
        // Se escuro, o ícone do Sol aparece
        toggleTxt.innerText = 'Modo Claro';
        toggleBtn.classList.add('bi-sun-fill');
        toggleBtn.classList.remove('bi-moon-fill');
    } else {
        // Se claro, o ícone da Lua aparece
        toggleTxt.innerText = 'Modo Escuro';
        toggleBtn.classList.add('bi-moon-fill');
        toggleBtn.classList.remove('bi-sun-fill');
    }

}