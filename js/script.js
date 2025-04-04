document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const messageText = document.getElementById("message-text");
    const valentineImg = document.getElementById("valentine-img");

    let noSize = 16;
    let yesSize = 16;
    let clickCount = 0;

    const messages = [
        "¿pq?",
        "Yo te amo porfi piensalo 2 veces",
        "Porfiiiiiiiiiiiiis",
        "¿De veritas? Gracias demasiadas. Verás que no te equivocaste al elegirme, lo juro. Te amo mucho ❤️"
    ];

    const gifs = [
        "img/no1.gif",
        "img/no2.gif",
        "img/no3.gif",
        "img/si.gif"
    ];

    noButton.addEventListener("click", () => {
        if (clickCount < messages.length - 1) {
            messageText.innerText = messages[clickCount];
            valentineImg.src = gifs[clickCount];
            clickCount++;

            if (noSize > 5) {
                noSize -= 2;
                noButton.style.fontSize = noSize + "px";
            }

            yesSize += 5;
            yesButton.style.fontSize = yesSize + "px";
        }
    });

    yesButton.addEventListener("click", () => {
        messageText.innerText = messages[messages.length - 1];
        valentineImg.src = gifs[gifs.length - 1];
        yesButton.innerText = "¡Te amo! ❤️";
        noButton.style.display = "none";

        emailjs.init("BJyM6bwIEbonieAdF");

        emailjs.send("service_joz8y0j", "template_jqrvczk", {
            to_email: "abdiasgalla550@gmail.com",
            message: "¡Dijo que sí!"
        }).then(response => {
            console.log("Correo enviado:", response);
        }).catch(error => {
            console.error("Error enviando correo:", error);
        });
    });
});

function nextStep(step) {
    document.querySelectorAll(".step").forEach(el => el.style.display = "none");
    if (step === 5) {
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById(`step-${step}`).style.display = "block";
    }
}
