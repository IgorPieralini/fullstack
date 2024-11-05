// Selecionando o canvas e configurando o contexto 2D
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Carregando a imagem
const img = new Image();
img.src = 'https://via.placeholder.com/50'; // Pode ser substituído pela URL ou caminho de uma imagem específica

// Inicializando as coordenadas da imagem para o centro do canvas
let imgX = canvas.width / 2 - 25;
let imgY = canvas.height / 2 - 25;

// Evento para mover a imagem conforme o movimento do mouse
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();

    // Calculando a posição do mouse em relação ao canvas
    let mouseX = event.clientX - rect.left - img.width / 2;
    let mouseY = event.clientY - rect.top - img.height / 2;

    // Impedindo que a imagem saia dos limites do canvas
    if (mouseX < 0) mouseX = 0;
    if (mouseY < 0) mouseY = 0;
    if (mouseX + img.width > canvas.width) mouseX = canvas.width - img.width;
    if (mouseY + img.height > canvas.height) mouseY = canvas.height - img.height;

    // Atualizando as coordenadas da imagem
    imgX = mouseX;
    imgY = mouseY;

    // Redesenhando a imagem
    draw();
});

// Função para desenhar a imagem no canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.drawImage(img, imgX, imgY); // Desenha a imagem na nova posição
}

// Desenhando a imagem inicial quando ela é carregada
img.onload = draw;