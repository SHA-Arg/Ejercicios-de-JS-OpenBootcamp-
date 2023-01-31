// calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var factorial = 1;
var i = 1;

while (i <= 10) {
    factorial = factorial * i;
    i++;
    if (i == 5) {
        break;
    }
}
console.log(factorial);