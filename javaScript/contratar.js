console.log('contratar foi implementado')


const btnNo = document.getElementById('btnNo')
const btnYes = document.getElementById('btnYes')
const container = document.getElementById('buttonsContainer')

// possiçao iniciais do botao NO
let currentX = 0 // eixo horizontal (esquerda, direita)
let currentY = 0 // eixo vertical (cima, baixo)



btnNo.addEventListener('mousemove', () => {
    moveButton()
})

// evento pro mobile que seria click
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault()
    moveButton
})




function moveButton() {

    // pega as dimensoes e posiçao e de um elemeto e retorna um objeto com ex: top, left, width etc...
    const containerRect = container.getBoundingClientRect()
    const btnRect = btnNo.getBoundingClientRect()
    // console.log(containerRect)

    
    const maxX = containerRect.width - btnRect.width
    const maxY = containerRect.height - btnRect.height
    // console.log(` altura${maxY} largura: ${maxX}`)

    // gera nova possiçao aleatoria
    const newX = Math.random() * maxX
    const newY = Math.random() * maxY

    
    // verifica se a possiçao ano esta muito proxima da possiçao atual
    const minDistance = 100 //distancia minima em px
    const distance =  Math.sqrt(Math.pow(newX - currentX, 2) + Math.pow(newY - currentY, 2)); // calcula a distância entre dois pontos no plano (tipo em um gráfico 2D).

     // Se estiver muito perto, gerar nova posição
     if (distance < minDistance) {
        newX = (currentX + containerRect.width / 2) % maxX;
        newY = (currentY + containerRect.height / 2) % maxY;
    }

     // Verificar limites
     if (newX < 0) newX = 0;
     if (newY < 0) newY = 0;
     if (newX > maxX) newX = maxX;
     if (newY > maxY) newY = maxY;


     // Aplicar nova posição
     currentX = newX;
     currentY = newY;
     
     btnNo.style.left = `${newX}px`;
     btnNo.style.top = `${newY}px`;
}




btnYes.addEventListener('click', () => {

    const audioWins = new Audio('./audio/wins-audio.mpeg');
    audioWins.currentTime = 0;
    audioWins.play();

    btnYes.innerText = "Chamando no WhatsApp...";

    const numero = '75988012123';
    const mensagem = encodeURIComponent('Gostei do seu portfólio, podemos conversar?');
    const url = `https://wa.me/${numero}?text=${mensagem}`;

    setTimeout(() => {
        window.open(url, '_blank');
    }, 700);
});


// Posicionar o botão "não" inicialmente
window.addEventListener('load', () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();
    
    // Posição inicial (esquerda da área)
    currentX = 50;
    currentY = containerRect.height / 2 - btnRect.height / 2;
    
    btnNo.style.left = `${currentX}px`;
    btnNo.style.top = `${currentY}px`;
});