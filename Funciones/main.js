window.addEventListener('load', () => {
    const audio = document.getElementById('audioBienvenida');
    
    audio.play().then(() => {
        console.log('El audio se está reproduciendo automáticamente.');
    }).catch((error) => {
        console.error('No se pudo reproducir automáticamente:', error);
    });
});
