/*
* Actividad 1
* Un revisor califica dos desafíos, otorgando puntos en una
* escala del 1 al 100 para tres categorías: claridad del problema,
* originalidad y dificultad.
*
* La calificación del desafío de Alice es a = (a[0], a[1], a[2]),
* y la calificación del desafío de Bob es b = (b[0], b[1], b[2]) .
* */

/*
* Criterios de Aceptación
* a[i] > b[i] => Alice +1
* a[i] < b[i] => Bob +1
* a[i] = b[i] => null
* */

/*
* Restricciones
* Todos los números ingresados debe ser entre 2 y 99
* */

/*
* Solución
* */
const a = [17, 2, 30];
const b = [99, 16, 8];
let c = [0, 0];
const min = 2;
const max = 99;

const valid = (array, min, max) => array.some(d => d < min) || array.some(d => d > max);

if (valid(a, min, max) || valid(b, min, max)) {
    console.log(`Los valores deben de estar dentro del rango ${min} al ${max}`);
} else {
    for (var i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            c[0]++;
        } else if (a[i] < b[i]) {
            c[1]++;
        }
    }
    console.log(c);
}

/*=====================================================================*/
/*
* Actividad 2
* Dada una cadena de texto (string), obtener el número de veces que
* se repite cada palabra del texto. El texto puede tener puntos y comas,
* puede tener palabras en mayúsculas o minúsculas.
* */

/*
* Criterios de Aceptación
* Número de apariciones de cada palabra
* */

/*
* Restricciones
* Devolver el resultado en JSON
* */

/*
* Solución
* */
const string = "Érase una vez una niñita que lucía una hermosa capa de color rojo. Como la niña la usaba muy a menudo, todos la llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la llamó y le dijo: —Abuelita no se siente muy bien, he horneado unas galletitas y quiero que tú se las lleves. —Claro que sí —respondió Caperucita Roja, poniéndose su capa y llenando su canasta de galletas recién horneadas. Antes de salir, su mamá le dijo: — Escúchame muy bien, quédate en el camino y nunca hables con extraños. —Yo sé mamá —respondió Caperucita Roja y salió inmediatamente hacia la casa de la abuelita.";
const repeated = str => {
    const string = str.toLowerCase();
    const normalize = string.normalize("NFD").replace(/[,;.:\—\u0300-\u036f]/g, "");
    const outSpace = normalize.split(' ').filter(String).join(' ');
    const split = outSpace.split(' ');
    return split.reduce((acc, el) => {
        if (acc[el]) {
            acc[el]++;
        } else {
            acc[el] = 1;
        }

        return acc;
    }, {});
}
console.log(repeated(string));