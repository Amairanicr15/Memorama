//inicialización de variables 
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;

//Apuntando a documento HTML 
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

// Generación de números aleatorios 
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
//lo que hace sort ordena números de acuerdo a una función
//como parámetro necesito tener una función que me indique el orden en el que quiero que se ordenen. Y como necesito que se desordenen, voy a poner unafunción que me genere número aleatorios, entonces voy a poner una función() de tipo flecha: =>

//funciones 
function contarTiempo(){
    setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
    },1000);
}

//function principal
function destapar(id){
    if (temporizador = false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas === 1){
        //Mostrar el primer número
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;

        //Deshabilitar primer boton
        tarjeta1.disabled = true;
    } else if(tarjetasDestapadas === 2){
        //Mostrar 2 número 
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        //Deshabilitar segundo boton 
        tarjeta2 = true;

        // Incrementar movimientos 
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            // Encerar contador tarjetas destapadas 
            tarjetasDestapadas = 0;

            //Aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🤘🏻😎`;
            }
        } else {
            //Mostrar momentaneamente valores y volver a tapar 
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },2000);
        }
    }
}
