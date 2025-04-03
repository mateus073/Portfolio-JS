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



//  comeco do zoom da minha foto da capa 
let foto = document.querySelector('.zoom')

foto.addEventListener('mouseover', () => {
    foto.classList.add('jsZ')
})

foto.addEventListener('mouseout', () => {
    foto.classList.remove('jsZ')
})
// fim do efeito de zoom na minha foto



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
// codigo dos projetos


import {dataProjetos} from './dataProjetos.js'

function criarCardProjeto(projetos) {
    const DivProjetos = document.querySelector('.projetosDiv')
    
    for (let x in projetos) {
        const divProjeto  = document.createElement('div')
        divProjeto.classList.add('cardProjeto')
    
        const imgProjeto = document.createElement('img')
        imgProjeto.classList.add('imgProjeto')
        imgProjeto.src = projetos[x].dataPost.imagem
    
        const divOverlay = document.createElement('div')
        divOverlay.classList.add('OverlayProjeto')
    
        const tituloProjeto = document.createElement('h2')
        tituloProjeto.classList.add('tituloProjeto')
        tituloProjeto.textContent = projetos[x].dataPost.titulo
        
        const tecUsadas = document.createElement('div')
        tecUsadas.classList.add('tecUsadas')
        projetos[x].dataPost.tecLogo.forEach(tec => {
            const imgTecUsada = document.createElement('img')
            imgTecUsada.classList.add('imgTecUsada')
            imgTecUsada.src = tec

            tecUsadas.append(imgTecUsada)
        })
        
        const divTitulocard = document.createElement('div')
        divTitulocard.classList.add('divTitulocard')
        divTitulocard.append(tituloProjeto, tecUsadas)
    

        const pStatus = document.createElement('p')
        pStatus.classList.add('pStatus')
        projetos[x].dataPost.status ? pStatus.textContent = 'Concluido' : pStatus.textContent = 'Em desenvolvimento'

        const btnProjeto = document.createElement('button')
        btnProjeto.textContent = 'VER PROJETO'
        btnProjeto.classList.add('btnProjeto')
        btnProjeto.setAttribute('data-name', `${projetos[x].dataPost.id}`)
        btnProjeto.addEventListener('click', (e) => OpenModal(e))
        
        const divBtnModal = document.createElement('div')
        divBtnModal.classList.add('divBtnModal')
        divBtnModal.append(pStatus, btnProjeto)
    
        // Adiciona os elementos ao card
        divProjeto.append(imgProjeto, divTitulocard, divOverlay, divBtnModal)
    
        // Insere o card no container principal
        DivProjetos.appendChild(divProjeto)
    
        // console.log(projetos[x].dataPost.titulo)
    }
}
criarCardProjeto(dataProjetos)


// codigo de arbrir modal e preenchelo


function OpenModal(e) {
    const modal = document.querySelector('#modalEspc')
    modal.showModal()
    
    const id = e.target.getAttribute('data-name')
    console.log(id)
}

function closeModal() {
    const modal = document.querySelector('#modalEspc')
    modal.close()
}
document.querySelector('.btnCloseModal').addEventListener('click', closeModal)


/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


// js do menu mobille abrir e fechar 
let abri = document.getElementById('abrir')
let menu = document.getElementById('menuMob')
let fecha = document.getElementById('btFechar')
let overlay = document.getElementById('overlay')

abri.addEventListener('click', () => {
    menu.classList.add('abrirMenu')
})

fecha.addEventListener('click', () => {
    menu.classList.remove('abrirMenu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrirMenu')
})

// fim do js do meu menu mobile (abrir e fechar)
