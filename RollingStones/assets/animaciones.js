// Animación del nav 
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 120) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '28%';

        nav.style.transform = 'scale(0.8)';
        nav.style.marginTop = '0px';

    } else {
        nav.style.position = 'relative';
        nav.style.transform = 'scale(1)';
        nav.style.marginTop = '0';
        nav.style.width = '38%';
      
    }
});

// Función para reproducir el audio de las imagenes 
function reproducirAudio(imageId, buttonId, audioId) {
    const audio = document.getElementById(audioId);
    const image = document.getElementById(imageId);
    const playButton = document.getElementById(buttonId);

    // hover sobre la imagen
    image.dispatchEvent(new Event('mouseover'));

    // click en el botón de reproducción
    playButton.click();
}



// LLamada botones de imagenes
document.getElementById('play-button-collage2').addEventListener('click', function () {
    document.getElementById('audio').play();
});

// Ejecutar para collage2
reproducirAudio('collage2', 'play-button-collage2', 'audio');

