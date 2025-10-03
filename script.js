// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const boton = document.getElementById('boton-clic');
    const titulo = document.getElementById('titulo-principal');
    
    // Variable para contar los clics
    let contadorClics = 0;
    
    // Función que se ejecuta al hacer clic en el botón
    function manejarClic() {
        contadorClics++;
        
        // Cambiar el texto del título
        titulo.textContent = `¡Aprendimos GitHub!`;
        
        // Cambiar color del título temporalmente
        titulo.style.color = getColorAleatorio();
        
        // Agregar efecto de animación
        titulo.style.transform = 'scale(1.1)';
        setTimeout(() => {
            titulo.style.transform = 'scale(1)';
        }, 200);
        
        // Mostrar mensaje en consola
        console.log(`Botón clickeado ${contadorClics} veces`);
    }
    
    // Función para generar colores aleatorios
    function getColorAleatorio() {
        const colores = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
            '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
        ];
        return colores[Math.floor(Math.random() * colores.length)];
    }
    
    // Agregar el evento click al botón
    boton.addEventListener('click', manejarClic);
    
    // Mensaje inicial en consola
    console.log('Página cargada correctamente');
});