function ordenararreglo(array){
    var datos=array.length;

    function comparar(a,b){
        return a-b;
    }
    array.sort(comparar);

    return("El segundo menor es "+array[1]+" y el segundo mayor es "+array[datos-2]);
}
console.log(ordenararreglo([9,18,27,45,67,32,5]));