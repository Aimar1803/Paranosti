const images = ["img/1.gif", "img/2.gif", "img/3.gif"]; // GIFs para el "No"
const messages = [
    "¿Por qué? ¿Ya no soy tan bueno?",
    "Te prometo cambiar, ya no seré malo, ya nunca te incomodaré.",
    "Porfiiiiiiiiiiiiis te 😢"
]; // Mensajes para cada "No"
const yesGif = "img/yes.gif"; // GIF especial para "Sí"
const yesMessage = "¿De veritas? Gracias demasiadas. Verás que no te equivocaste al elegirme, lo juro. ¡Te amo mucho! ❤️";

let currentImage = 0;
let currentMessage = 0;

let yesButton = document.getElementById("yes-btn");
let noButton = document.getElementById("no-btn");
let valentineImg = document.getElementById("valentine-img");
let messageText = document.getElementById("message-text"); // Agregar en HTML

noButton.addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    currentMessage = (currentMessage + 1) % messages.length;
    valentineImg.src = images[currentImage]; // Cambia el GIF
    messageText.innerText = messages[currentMessage]; // Cambia el mensaje
});

yesButton.addEventListener("click", () => {
    valentineImg.src = yesGif; // Cambia a la imagen especial
    messageText.innerText = yesMessage; // Mensaje de "Sí"
    yesButton.style.fontSize = "30px"; // Hace el botón más grande
    yesButton.innerText = "¡Te amo! ❤️"; // Cambia el texto del botón
    noButton.style.display = "none"; // Oculta el botón de "No"
});
