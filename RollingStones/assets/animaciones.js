// Animación del nav 
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 120) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '400px';
        nav.style.marginTop = '10px';
        nav.style.fontSize = '10pt';
        //sobreponer nav 
        nav.style.zIndex = '1000'; 
    } else {
        nav.style.position = 'relative';
        nav.style.marginTop = '0';
        nav.style.fontSize = '12pt';
        nav.style.width = '500px';
        nav.style.zIndex = '16pt'; // Añadir esta línea
    }
});

// Para reproducir audio en hover
var currentAudio = null;

// Función para reproducir el audio de las imagenes 
function reproducirAudio(imageId, buttonId, audioId) {
    const audio = document.getElementById(audioId);
    const image = document.getElementById(imageId);
    const playButton = document.getElementById(buttonId);

    // Detener el audio actual si hay uno reproduciéndose
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // hover sobre la imagen
    image.dispatchEvent(new Event('mouseover'));

    // click en el botón de reproducción
    playButton.click();
    // Añadir evento de hover a la imagen para cambiar la opacidad
    image.addEventListener('mouseover', function () {
        image.style.opacity = '0.5';
    });

    image.addEventListener('mouseout', function () {
        image.style.opacity = '1';
    });

    // Asignar el nuevo audio a currentAudio
    currentAudio = audio;
}


// LLamada botones de imagenes
document.getElementById('play-button-collage2').addEventListener('click', function () {
    document.getElementById('audio').play();
});

// Ejecutar para collage2
reproducirAudio('collage2', 'play-button-collage2', 'audio');


// Para reproducir audio en hover
function playAudio(audioId) {
    // Detener el audio actual si hay uno reproduciéndose
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = document.getElementById(audioId);
    currentAudio.play();
}