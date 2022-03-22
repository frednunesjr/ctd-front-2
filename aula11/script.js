window.onload = () => {

  const form = document.querySelector('form');
  const nome = document.querySelector('#nome');
  const sobrenome = document.querySelector('#sobrenome');

  const pTrim = document.querySelector('#trim');
  const pUpperCase = document.querySelector('#uppercase');
  const pLowerCase = document.querySelector('#lowercase');
  const pConcat = document.querySelector('#concat');
  const pReplace = document.querySelector('#replace');

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Nome Completo com concat() para uso futuro
    const nomeCompleto = nome.value.concat(' ', sobrenome.value);

    //Imprimindo com trim()
    const trim = document.createTextNode(nomeCompleto.trim());
    pTrim.appendChild(trim);

    //Imprimindo com toUppercase()
    const upperCase = document.createTextNode(nomeCompleto.toUpperCase());
    pUpperCase.appendChild(upperCase);
    
    //Imprimindo com toLowercase()
    const lowerCase = document.createTextNode(nomeCompleto.toLowerCase());
    pLowerCase.appendChild(lowerCase);

    //Imprimindo com concat()
    pConcat.appendChild(document.createTextNode(nomeCompleto));
    
    // Imprimindo com (replace)
    
      // Solução usando replace() + concat()
      /*
      let nomeResultado = '';
      for (letra of nomeCompleto) {
        if(letra == 'e'){
          nomeResultado = nomeResultado.concat(letra.replace('e','3'));
        } else if(letra == 'a'){
          nomeResultado = nomeResultado.concat(letra.replace('a','@'));
        } else {
          nomeResultado = nomeResultado.concat(letra);
        }
      }
      pReplace.appendChild(document.createTextNode(nomeResultado));
      */
    
      // Solução usando replace() + Array
      let nomeResultado = '';
      let nomeArray = [];
      
      for (letra of nomeCompleto) {
        if(letra == 'e'){
          nomeArray.push(letra.replace('e','3'));
        } else if(letra == 'a'){
          nomeArray.push(letra.replace('a','@'));
        } else {
          nomeArray.push(letra);
        }
      }
      nomeResultado = nomeArray.join('');
      pReplace.appendChild(document.createTextNode(nomeResultado));

  });
}