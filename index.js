const canvas = document.getElementById("miCanvas");
const titulo = document.getElementById("titulo");
const girasol = document.getElementById("girasol");
const audio = document.getElementById("audio");

//Modificación del aspecto del título
titulo.style.color = "yellow";

//Creación del girasol
const ctx = canvas.getContext("2d");
canvas.style.width = "50%";  //Escalado de la figura

//Parámetros del girasol
let r = 250; //Radio de girasol
let act = 0; //Activado o desactivado
let n = 10; //Numero de petalos

ctx.beginPath();  // Inicia un camino nuevo
ctx.strokeStyle = "yellow";  // color del trazo
ctx.fillStyle = "rgba(216, 209, 79, 1)";
ctx.moveTo(r, r);  // Punto inicial (centro)

for(let i=0;i<=360;i+=0.02){
    let ang = i*Math.PI/180;
    let r_ang = r*Math.sin(n*ang);
    let x = r_ang*Math.cos(ang)+r;
    let y = r_ang*Math.sin(ang)+r;

    if (Math.abs(r_ang)>=70){
        if(act==0){ctx.moveTo(x,y);} 
        else{ctx.lineTo(x,y);}
        act = 1;
    } else{
        ctx.moveTo(x,y);
        act = 0;
    }
}

ctx.fill();
ctx.stroke();   // Dibuja el contorno

ctx.beginPath();  // Inicia un camino nuevo
ctx.strokeStyle = "saddlebrown";  // color del trazo
ctx.moveTo(r, r); // Punto inicial
for(let i=0;i<=360;i+=0.1){
    let ang = i*Math.PI/180;
    let r_ang = 70*Math.sin(100*ang);
    let x = r_ang*Math.cos(ang)+r;
    let y = r_ang*Math.sin(ang)+r;
    ctx.lineTo(x,y);
    console.log(x,y);
}

ctx.fill();
ctx.stroke();  // Dibuja el contorno

let mensajes = ["Hola",
    "...",
    "¿Cómo estás?",
    "Espero que bien",
    "Te quiero",
    "Feliz 21 de septiembre",
    "¡Feliz Inicio de Primavera!"];

for (let i = 0; i < mensajes.length; i++){
    setTimeout(() => {titulo.textContent=mensajes[i];
    },1500*(i+1))
}

girasol.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        boton.textContent = "Pausar Música";
    } else {
        audio.pause();
        boton.textContent = "Play Música";
    }
});