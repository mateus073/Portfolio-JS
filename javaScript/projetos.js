import { dataProjetos } from './dataProjetos.js'

function criarCardProjeto(projetos) {
    const DivProjetos = document.querySelector('.projetosDiv')

    for (let x in projetos) {
        const divProjeto = document.createElement('div')
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

        divProjeto.append(imgProjeto, divTitulocard, divOverlay, divBtnModal)
        DivProjetos.appendChild(divProjeto)
    }
}


// adicionando evento de click no botao dos projetos do carrosel de projetos em destaque
// o evento adicionado abre o modal de detalhes e passo o id do projeto pra pegar os dados do projeto clicado em "dataProjetos" e popular o modal

const cardsDestaques = document.querySelectorAll('.card')
cardsDestaques.forEach(card => card.querySelectorAll('.btnProjeto').forEach(btn => btn.addEventListener('click', (e) => OpenModal(e))))



function OpenModal(e) {
    const modal = document.querySelector('#modalEspc')
    modal.showModal()

    // impedir scroll do body quando o modal estiver aberto
    document.body.style.overflow = 'hidden'

    const id = e.target.getAttribute('data-name')
    const newDataModal = dataProjetos.find(item => item.dataPost.id == id)

    if (!newDataModal) {
        console.error("Projeto não encontrado!")
        return
    }

    const video = modal.querySelector('.modalVideo')
    const source = modal.querySelector('.modalSourceVideo')
    source.src = newDataModal.dataModal.video
    video.load()

    modal.querySelector('.titProjModal').textContent = newDataModal.dataModal.texto.titulo
    modal.querySelector('.pObjetivo').textContent = newDataModal.dataModal.texto.objetivo
    modal.querySelector('.pScopo').textContent = newDataModal.dataModal.texto.escopo

    const ulTecUse = modal.querySelector('.ulTecUse')
    ulTecUse.innerHTML = ""
    newDataModal.dataModal.texto.tecnologias.forEach(tecnologia => {
        const li = document.createElement('li')
        li.textContent = tecnologia
        ulTecUse.appendChild(li)
    })

    const btnAcessProj = modal.querySelector('.btnAcessProj')
    const btnAcessRep = modal.querySelector('.btnAvessRep')

    btnAcessProj.replaceWith(btnAcessProj.cloneNode(true))
    btnAcessRep.replaceWith(btnAcessRep.cloneNode(true))

    const newBtnAcessProj = modal.querySelector('.btnAcessProj')
    const newBtnAcessRep = modal.querySelector('.btnAvessRep')

    newBtnAcessProj.addEventListener("click", () => {
        window.location.href = newDataModal.dataModal.linkProjeto
    })
    newBtnAcessRep.addEventListener("click", () => {
        window.location.href = newDataModal.dataModal.linkGithub
    })

    
}


function closeModal() {
    const modal = document.querySelector('#modalEspc')
    modal.close()

    // permitir scroll do body novamente quando o modal for fechado
    document.body.style.overflow = 'auto'

    const video = modal.querySelector('.modalVideo')
    video.pause()
}
document.querySelector('.btnCloseModal').addEventListener('click', closeModal)






// ✅ CORRIGIDO: carrossel iniciado após criarCardProjeto popular o DOM
function iniciarCarrosel() {
    const track = document.getElementById('track')
    const originalCards = [...track.children]

    if (originalCards.length === 0) {
        console.error('Nenhum card encontrado no #track!')
        return
    }

    // clones do fim
    originalCards.forEach(card => {
        track.appendChild(card.cloneNode(true))
    })

    // clones do início
    originalCards.forEach(card => {
        track.prepend(card.cloneNode(true))
    })

    // ✅ adicione isso dentro de iniciarCarrosel(), após os clones
    track.addEventListener('click', (e) => {
        const btn = e.target.closest('.btnProjeto')
        if (btn) OpenModal(e)
    })

    const CARD_W = 360 + 50
    const total = originalCards.length
    let index = total

    function setPosition(animated) {
        if (!animated) track.classList.add('no-transition')
        track.style.transform = `translateX(${-CARD_W * index}px)`
        if (!animated) {
            track.offsetHeight
            track.classList.remove('no-transition')
        }
    }

    function next() {
        index++
        setPosition(true)

        setTimeout(() => {
            if (index >= total * 2) {
                index = total
                setPosition(false)
            }
        }, 520)
    }

    function prev() {
        index--
        setPosition(true)

        setTimeout(() => {
            if (index < total) {
                index = total * 2 - 1
                setPosition(false)
            }
        }, 520)
    }

    setPosition(false)
    setInterval(next, 3000)
}


// ordem importa: primeiro cria os cards, depois inicia o carrossel
criarCardProjeto(dataProjetos)
iniciarCarrosel()