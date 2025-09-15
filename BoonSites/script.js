const explodeButton = document.getElementById('explodeButton');
const explosionSound = document.getElementById('explosionSound');

explodeButton.addEventListener('click', () => {
    explosionSound.play();
});