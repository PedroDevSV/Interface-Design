// Animación del nav 
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 120) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '27%';
        nav.style.marginTop = '10px';
        nav.style.fontSize='0.9em';
        nav.style.transition='0.5s ease';
        //sobreponer nav 
        nav.style.zIndex = '1000'; 
    } else {
        nav.style.position = 'relative';
        nav.style.marginTop = '0';
        nav.style.width = '40%';
        nav.style.zIndex = '1'; 
        nav.style.fontSize = '12pt';
    }
});

// Función para reproducir el audio de las imagenes 
function audioCollage(imageId, buttonId, audioId) {
    const audio = document.getElementById(audioId);
    const image = document.getElementById(imageId);
    const playButton = document.getElementById(buttonId);

    // hover sobre la imagen
    image.dispatchEvent(new Event('mouseover'));

    // click en el botón de reproducción
    playButton.click();
    //cambiar la opacidad
    image.addEventListener('mouseover', function () {
        image.style.opacity = '0.5';
    });

    image.addEventListener('mouseout', function () {
        image.style.opacity = '1';
    });
}
// LLamada botones de imagenes
document.getElementById('play-button-collage2').addEventListener('click', function () {
    document.getElementById('audio').play();
});

// Ejecutar para collage2
// reproducirAudio('collage2', 'play-button-collage2', 'audio');

// Para reproducir audio en hover
var currentAudio = null;

function playAudio(audioId) {
   
    // COntrolamos que se detenga el audio actual si hay uno reproduciéndose
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = document.getElementById(audioId);
    currentAudio.play();
}





