// comeco do efeito de hover nos itens do menu de navegaçao:

// selecionno todos os (a) dos (li)
let menuLInks = document.querySelectorAll('.aLink');

// loop pra adicionar os efeitos de mudar a cor em todos os links(a) do menu de navegacao
menuLInks.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('jsA')
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('jsA')
    })
})



/*msm logica do codigo encima, porem para aumentar a scale dos li */
let zoonLi = document.querySelectorAll('.menuLi');

zoonLi.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('jsLi')
    })
    item.addEventListener('mouseout', () => {
        item.classList.remove('jsLi')
    })
})
// fim do js do menu de navegacao 



/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



//zoom da minha foto da capa 
let foto = document.querySelector('.zoom')

foto.addEventListener('mouseover', () => {
    foto.classList.add('jsZ')
})

foto.addEventListener('mouseout', () => {
    foto.classList.remove('jsZ')
})




/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



// comeco do efeito de cor de fundo do meus links de redes sociais

// seleciona todos as imgs de redes sociais
let imgSocial = document.querySelectorAll('#imgSocial')

// loop que aciona a funcao responsavel por dar adiconar e remover a class responsavel pelo efeito 
imgSocial.forEach(item => {
    item.addEventListener('mouseover', corLink);
    item.addEventListener('mouseout', () => {
        item.classList.remove('jsGit', 'jsLkd', 'jsInsta', 'jsWhats')
    })
});


// funcao responsavel pelo efeito de zomm e alteara a cor 
function corLink() {
    let socialClass = this.getAttribute('class')  // atribui as class dos elementos do loop pra uma variavel 

    // condicionais que virificam a class dos elementos e adiciona classes especificas pra cada um
    if (socialClass.includes('git')) {
        this.classList.add('jsGit')
    } else if (socialClass.includes('linkedin')) {
        this.classList.add('jsLkd')
    } else if (socialClass.includes('instagram')) {
        this.classList.add('jsInsta')
    } else if (socialClass.includes('whatsapp')) {
        this.classList.add('jsWhats')
    }
}
// fim do efeito das imgs/botoes de redes sociais 

//usar include pra verrificar o nome da class pos o getAtribute retorna todas as class e nesse caso queremos verificar apenas uma 
//sempre que for selecionar varios elemtos como o "querySelectorAll" preferir usar class em vez de id, pos class e o correto pra usar em varios elementos 
// lembrar sempre que item e o elemntos que acionou a funcao, na hora que for se rreferir ao elemento que sera adicionado a class ou sera modificado usamos o this







/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


// js do menu mobille abrir e fechar 
const btnAbrir = document.getElementById('abrir');
const menu = document.getElementById('menuMob');
const btnFechar = document.getElementById('btFechar');
const overlay = document.getElementById('overlay');

function abrirMenu() {
    menu.classList.add('abrirMenu');
    document.body.classList.add('menuAberto');
}

function fecharMenu() {
    menu.classList.remove('abrirMenu');
    document.body.classList.remove('menuAberto');
}

btnAbrir?.addEventListener('click', abrirMenu);
btnFechar?.addEventListener('click', fecharMenu);
overlay?.addEventListener('click', fecharMenu);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') fecharMenu();
});

document.querySelectorAll('.menuMob a').forEach((link) => {
    link.addEventListener('click', fecharMenu);
});
// fim do js do meu menu mobile (abrir e fechar)