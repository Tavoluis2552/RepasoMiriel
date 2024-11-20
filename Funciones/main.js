document.getElementById('comenzarBtn').addEventListener('click', () => {
    const audio = document.getElementById('audioBienvenida');

    // Reproduce el audio al hacer clic
    audio.play().then(() => {
        console.log('Audio reproduciéndose tras el clic.');
    }).catch((error) => {
        console.error('Error al reproducir el audio:', error);
    });
});
