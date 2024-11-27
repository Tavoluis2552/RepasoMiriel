// Seleccionar imágenes y descripción
const items = document.querySelectorAll('.carrusel-item'); // Selecciona cada contenedor de imagen
const description = document.getElementById('descripcion');
const modal = document.getElementById('imageModal'); // Modal
const modalImage = document.getElementById('modalImage'); // Imagen dentro del modal
const modalCaption = document.getElementById('caption'); // Descripción del modal
const closeModal = document.querySelector('.close'); // Botón para cerrar el modal
const descriptions = [
    "Reflejas lo increíble que eres: una estudiante de psicología dedicada, trabajadora y apasionada. Mientras atiendes a este alumno, demuestras tu empatía, paciencia y compromiso por ayudar a los demás. A pesar de combinar estudio y trabajo, siempre das lo mejor de ti, mostrando tu disciplina y fortaleza en todo lo que haces. Eres una mujer que inspira y transforma vidas, y me siento orgulloso de ti.",
    "Demuestras tu inmenso corazón y el amor que tienes por tu familia. Acompañaste a tu hermano día y noche tras su operación, mostrando tu fortaleza, dedicación y ese lado tan noble y protector que tanto admiro en ti. Siempre estás ahí para los que amas, entregándote sin reservas, y eso es algo que te hace única y maravillosa.",
    "Tu liderazgo y confianza al dirigirte a la gente. Tu habilidad para comunicarte con claridad y empatía demuestra tu compromiso por generar un impacto positivo en tu comunidad. Eres un ejemplo de profesionalismo, dedicación y pasión por lo que haces, siempre buscando el bienestar de los demás.",
    "Tu capacidad para transmitir conocimientos y valores demuestra tu compromiso por formar personas más conscientes y responsables. Eres una guía para los jóvenes, inspirándolos con tu profesionalismo y empatía, dejando una huella positiva en su crecimiento personal.",
    "A pesar de las circunstancias, logras mantener la unión familiar. Aunque tu padre y tu madre tomaron caminos diferentes, tú demuestras que los momentos importantes pueden reunirlos de otra manera.",
    "Veo a una mujer fuerte y valiente, alguien que enfrenta horarios pesados y largas jornadas de trabajo sin perder su esencia. Aunque el cansancio podría detener a muchos, tú sigues de pie, demostrando que tu determinación no tiene límites. Tu capacidad para perseverar, mantener una sonrisa y seguir adelante, incluso en los días más difíciles, es algo que admiro profundamente. Eres inspiración, constancia y un ejemplo de lo que significa luchar por tus sueños.",
    "No sé qué es lo que más me enamora de ti: tu sonrisa que ilumina todo a su alrededor, tus ojos que parecen hablarme sin decir una palabra o esa energía especial que llevas contigo. Cada vez que te veo, como en esta imagen, siento paz, felicidad y la certeza de que contigo todo está bien. Me haces sentir afortunado, como si hubiera encontrado algo único y perfecto en este mundo. Eres mi refugio, mi alegría y mi mayor motivo para sonreír cada día."
];
let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarrusel() {
    const offset = -currentIndex * 100; // Calcula el desplazamiento
    items.forEach((item) => {
        item.style.transform = `translateX(${offset}%)`; // Desplaza cada item
    });

    // Actualizar descripción
    description.textContent = descriptions[currentIndex];
}

// Botón "Anterior"
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Navegar al anterior
    updateCarrusel();
});

// Botón "Siguiente"
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Navegar al siguiente
    updateCarrusel();
});

// Mostrar modal al hacer clic en una imagen
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block'; // Muestra el modal
        modalImage.src = item.querySelector('img').src; // Usa la imagen clickeada
        modalCaption.textContent = descriptions[index]; // Muestra la descripción correspondiente
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Oculta el modal
    }
});

// Inicializar el carrusel
updateCarrusel();
