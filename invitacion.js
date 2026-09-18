const enterButton = document.getElementById("enterButton");

const inicio = document.querySelector(".hero");

const letter = document.getElementById("letter");

const paper = document.querySelector(".paper");


// 🎵 MÚSICA DE LA INVITACIÓN
const music = new Audio("musica/fiesta%20wao.mp3");

music.loop = true;
music.volume = 0.6;


// ✨ AL ENTRAR A LA NOCHE
enterButton.addEventListener("click", () => {

    // 🎵 Comienza la música
    music.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });


    // 🌑 Desaparece la pantalla inicial
    inicio.style.opacity = "0";


    setTimeout(() => {

        // Ocultar pantalla inicial
        inicio.style.display = "none";


        // 🦇 Mostrar la invitación
        letter.style.position = "fixed";
        letter.style.visibility = "visible";
        letter.style.opacity = "1";


        document.body.style.background = "#17100b";


        // ✨ Animación del papel
        setTimeout(() => {
            paper.style.transform = "scale(1)";
        }, 100);


    }, 1200);

});
