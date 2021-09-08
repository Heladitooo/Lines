
//Importamos el lienzo y los inputs
const rangeInput = document.getElementById("rangeInput");
const canvas = document.getElementById("canvas");
const colorsInput = document.getElementById("colorsInput");

//Nuestra lista de colores
const colors = [
    "red",
    "blue",
    "cadetblue",
    "darkcyan",
    "lawngreen",
    "orange",
    "green",
    "pink",
    "white",
    "purple",
    "yellow",
]

//Decimos que el lienzo esta en 2d
const ctx = canvas.getContext("2d");

//Función que retorna un valor aleatorio de un minimo y un maximo
function RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Función que dibuja la recta
function createDraw() {

    //Limpia el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Iteracion inicial
    let iterations = 1;

    //Un intervalo que dibuja una linea cada 100 milisegundos
    const draw = setInterval(() => {

        //Cambiamos el color del fondo a negro
        document.body.style.background = "black";

        //Si el color es random
        if (colorsInput.value === "random") {
            //Cada vez que dibuje una linea elegira un color aleatorio
            ctx.strokeStyle = colors[RandomRange(0, colors.length)];
        } else {
            //Si no va a ser el color que elijas y si no blanco
            ctx.strokeStyle = colorsInput.value || "white";
        }

        //Empieza una nueva linea
        ctx.beginPath();

        //Mueve el lapiz en 0 y en y
        ctx.moveTo(0, iterations * rangeInput.value);

        //Dibuja una linea desde el punto inicial hasta lo largo que sea el lienzo
        ctx.lineTo(iterations * rangeInput.value, canvas.height);

        //Termina de dibujar la linea
        ctx.stroke();

        //Si la iteracion en y es mayor a la altura del lienzo
        if (iterations * rangeInput.value > canvas.height) {
            //Termina el intervalo de 500 milisegundos
            clearInterval(draw);

            //Cambia el color del fondo
            document.body.style.background = "#141b1b";
        }

        //Suma en iteraciones
        iterations++;
    }, 100);
}


