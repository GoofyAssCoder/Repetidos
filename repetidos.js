/*Función a la que pasando un array me diga los repetidos de cada elemento
Ej: [2,3,2,2] -> [3,1]*/

var indices = [];
var array = [2, 3, 3, 2, 3, 2, 3];
var element = 3;

function repetidos (array){
    var id = array.indexOf(element);

    while (id != -1) {
        indices.push(id);
        id = array.indexOf(element, id + 1);
    }
return indices.length;
}

console.log(repetidos(array));