/*Función a la que pasando un array me diga los repetidos de cada elemento
Ej: [2,3,2,2] -> [3,1]*/

function repetidos(array) {
    var elementos = [];
    var repeticiones = [];

    for (var i = 0; i < array.length; i++) {
        var elemento = array[i];
        var encontrado = false;

        // Compruebo si el elemento ya ha sido contado
        for (var j = 0; j < elementos.length; j++) {
            if (elementos[j] === elemento) {
                repeticiones[j]++;
                encontrado = true;
                break;
            }
        }

        // Si no lo hemos contado aún, lo añadimos:
        if (!encontrado) {
            elementos.push(elemento);
            repeticiones.push(1);
        }
    }

    return repeticiones;
}

var array = [2, 3, 2, 2, 3, 2, 3];
console.log(repetidos(array)); 
