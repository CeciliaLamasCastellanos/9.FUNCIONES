function Sumaarreglo(arreglo){
    var suma=0
    for(i=0; i<arreglo.length; i++){
        suma+=arreglo[i]
    }
    return "La suma de los valores del arreglo es " +suma
}
var array=[1,2,3,4,5]
console.log(Sumaarreglo(array))
