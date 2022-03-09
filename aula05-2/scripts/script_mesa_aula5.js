/**
 * Fred Nunes passou por aqui
 */

// Pego os itens do HTML (cada felino), pra cada item, insiro um novo objeto dentro do Array.
let dados = [
    {
        img: "./imagens/tiger.jpg",
        titulo: "O tigre",
        texto: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)\
        pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um\ predador carnívoro e é a maior espécie de felino do mundo junto com o leão."
    },
    {
        img: "./imagens/leon.jpg",
        titulo: "O leão",
        texto: "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies\
        do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e\ fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva\
        da Bacia do Congo) e uma pequena área do noroeste da Índia."
    },
    {
        img: "./imagens/leopardo.jpg",
        titulo: "O leopardo",
        texto: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos\
        outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma\
        modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e,\
        quando tem a pelagem completamente escura, como pantera negra (melanista)."
    },
    {
        img: "./imagens/pantera-negra.jpg",
        titulo: "A pantera negra",
        texto: "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes,\
        especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca).\
        Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é\
        simplesmente uma variação negra destes animais."
    },
    {
        img: "./imagens/jaguar.jpg",
        titulo: "O jaguar",
        texto: "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do\
        gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também\
        é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão\
        (Panthera leo)."
    },
    {
        img: "./imagens/chita.jpg",
        titulo: "O guepardo",
        texto: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único\
        representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal\
        terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros."
    }
]

// Pra cada objeto dentro do meu array, vou gerar a <div class="item">...</div> através de um loop Array.forEach()
dados.forEach((item) => {

    // Crio o elemento <div></div>
    let divItem = document.createElement('div');
    // Adiciono a classe item à div: <div class='item'></div>
    divItem.classList.add('item');

    // Crio o elemento <img>
    let img = document.createElement('img');
    // Adiciono o atributo src ao img e falo qual o caminho pra imagem
    // Ex.: <img src='./imagens/chita.jpg'>
    img.setAttribute('src', item.img);

    // Crio o elemento <h2></h2>
    let h2 = document.createElement('h2');
    // Crio o nó de texto com seu conteudo sendo o título do item. Ex.: "O guepardo"
    let titulo = document.createTextNode(item.titulo);

    // Insiro o titulo dentro do elemento <h2> - Ex.: <h2>O guepardo</h2>
    h2.appendChild(titulo);

    // Repito o mesmo processo do título, mas agora com a elemento <p></p>
    // Crio o elemento <p></p>
    let p = document.createElement('p');

    // Crio o nó de texto com seu conteudo sendo o texto do item. Ex.: "O guepardo ou chita..."
    let texto = document.createTextNode(item.texto);

    // Insiro o texto dentro do elemento <p> - Ex.: <p>O guepardo ou chita...</p>
    p.appendChild(texto);

    // Vamos montar nossa <div class="item">...</div> inserindo o conteúdo dela
    divItem.appendChild(img);
    divItem.appendChild(h2);
    divItem.appendChild(p);
    
    /**
     * Acima inserimos a imagem, título e parágrafo ao element div resultado:
     * 
     * <div class="item">
     *  <img src="url_da_img_do_item">
     *  <h2>Título do Item</h2>
     *  <p>Texo do item</p>
     * </div>
     */

    // Agora vamos inserir isso dentro do nosso HTML.
    // Seleciono minha <div id="lista" class="container"> da linha 29 do nosso HTML
    let divLista = document.querySelector('#lista');
    
    // E insiro a minha <div class="item">...</div> criada dentro do loop
    divLista.appendChild(divItem);
    
    // E assim o loop irá se repetir até terminar todos os itens da lista
});

/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        body.classList.add('body-dark');
        h1.classList.add('h1-dark');

        //1) Utilizando For..Of
        /*  for (let item of itemsList) {
             item.classList.add('items-dark')
             item.classList.add('items-text-dark')
         } */

        //2) Percorrendo com o ForEach (Recomendado)
        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });

        /* 3) Alterando os elementos específicos ('h2' e 'p') ao invés de colocar a classe na div pai
         
        itemsList.forEach(item => {
             item.classList.add('items-dark');
 
             //1 maneira: Alterandos os elementos específicos pelo index/posição no DOM
             item.children[1].classList.add('items-text-dark') //[1] equivale ao 'h2'
             item.children[2].classList.add('items-text-dark') //[2] equivale ao 'p'
 
             // 2 maneira: Capturando pelo seletor (Recomendado) 
             item.querySelector('h2').classList.add('items-text-dark')
             item.querySelector('p').classList.add('items-text-dark')
         }); */


    } else { //Caso seja false, ou seja, não está selecionado


        /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}