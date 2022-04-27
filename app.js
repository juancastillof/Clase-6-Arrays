let nombreUser = prompt("Ingresa tu nombre.");
const tasaAnual = 45.5;
let tasaMensual = tasaAnual / 12 / 100;
let capital;
let cantidadDeMeses;
let resultadoOperacion;
let interesesObtenidos;

let opcion = parseInt(prompt(`Hola! ${nombreUser}\n¿Qué te gustaría elegir?\n1 - Ver Tasa nomial anual vigente.\n2 - Entrar al simulador de plazo fijo.\n3 - Entrar al simulador de plazo fijo con interes compuesto.\n4 - ¿Qué es el interes compuesto?\n\nPara elegir una opción escribir su número.`));

// Funciones

const multiplicacion = (a,b) => a * b;
const suma = (a,b) => a + b;
const interesElevado = (a,b) => a ** b;

// Arrays

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',2022];

const mostrarMesActual = new Date();
let mesActual = meses[mostrarMesActual.getMonth()];

console.log(mesActual);

function recargarNavegador() {
    window.location.reload();
  }

while (opcion < 0 && opcion > 5);{
        switch (opcion) {
            case 1:
                opcion = 1;

                alert(`La TNA vigete del mes ${mesActual} es ${tasaAnual}%`)

                break;

            case 2:
                opcion = 2;

                capital = parseInt(prompt("Ingresa el capital."));
                cantidadDeMeses = parseInt(prompt("Ahora la cantidad de meses que desea hacer el plazo fijo."));
            
                resultadoOperacion = multiplicacion(capital,suma(1,multiplicacion(tasaMensual,cantidadDeMeses)));
                interesesObtenidos = resultadoOperacion - capital;
            
                alert(`Ingresaste de capital: $${capital}\nCon una TNA ${tasaAnual}%\nA ${cantidadDeMeses} meses\nEl capital obtenido en ese tiempo es $${resultadoOperacion}\nLos intereses obtenidos en esos ${cantidadDeMeses} meses es de $${interesesObtenidos}`);
            
                break;

            case 3:
                opcion = 3;

                capital = parseInt(prompt("Ingresa el capital."));
                cantidadDeMeses = parseInt(prompt("Ahora la cantidad de meses que desea hacer el plazo fijo."));

                resultadoOperacion = multiplicacion(capital,interesElevado(suma(1,tasaMensual),cantidadDeMeses));
                interesesObtenidos = resultadoOperacion - capital;

                alert(`Ingresaste de capital: $${capital}\nCon una TNA ${tasaAnual}%\nA ${cantidadDeMeses} meses\nEl capital obtenido en ese tiempo es $${resultadoOperacion}\nEl interese obtenidos en esos ${cantidadDeMeses} menses es $${interesesObtenidos}`);
            
                break;

            case 4:
                opcion = 4;

                alert(`El interés compuesto es aquel que se va sumando al capital inicial y sobre el que se van generando nuevos intereses.`);
            
                break;

            case 5:
                opcion = 5;
    
                alert(`${nombreUser} nos vemos! :) `);
                
                break
            
            default:
                opcion > 5;

                opcion = parseInt(prompt(`Mmm... ${nombreUser} no ingresaste una opción correcta.\n¿Qué te gustaría elegir?\n1 - Ver Tasa nomial anual vigente.\n2 - Entrar al simulador de plazo fijo.\n3 - Entrar al simulador de plazo fijo con interes compuesto.\n4 - ¿Qué es el interes compuesto?\n \n5 - Para finalizar el simulador\nPara elegir una opción escribir su número.`)
                );
        }
}