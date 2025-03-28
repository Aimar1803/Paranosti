const images = ["img/1.gif", "img/2.gif", "img/3.gif"]; // GIFs para el "No"
const yesGif = "img/yes.gif"; // GIF especial para "Sí"
let currentImage = 0;

let yesButton = document.getElementById("yes-btn");
let noButton = document.getElementById("no-btn");
let valentineImg = document.getElementById("valentine-img");

noButton.addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    valentineImg.src = images[currentImage]; // Cambia el GIF al decir "No"
});

yesButton.addEventListener("click", () => {
    valentineImg.src = yesGif; // Cambia a la imagen especial
    yesButton.style.fontSize = "30px"; // Hace el botón más grande
    yesButton.innerText = "¡Te amo! ❤️"; // Cambia el texto del botón
    noButton.style.display = "none"; // Oculta el botón de "No"
});
