document.getElementById('comenzarBtn').addEventListener('click', () => {
    const audio = document.getElementById('audioBienvenida');

    // Reproduce el audio al hacer clic
    audio.play().then(() => {
        console.log('Audio reproduciéndose tras el clic.');
    }).catch((error) => {
        console.error('Error al reproducir el audio:', error);
    });

    // Redirigir a la página carruselAño.html
    setTimeout(() => {
        window.location.href = 'Paginas/carruselAño.html'; // Ruta relativa a carruselAño.html
    }, 500); // Retraso opcional para asegurar que el audio inicie antes de redirigir
});
