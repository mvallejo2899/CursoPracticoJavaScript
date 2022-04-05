// Codigo del cuadrado

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 
perimetroCuadrado()

// console.log("El perimetro de cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
} 
areaCuadrado ()

// console.log("El area del cuadrado es: " + areaCuadrado + "cm cuadrados");

console.groupEnd();

// Codigo del triangulos
console.group("Triangulos")

// const ladoTriangulo1 = 6;

// const ladoTriangulo2 = 6;

// const baseTriangulo = 4;

// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm, " 
// + ladoTriangulo2 + "cm, " 
// + baseTriangulo + "cm" 
// )

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function areaTriangulo (altura, base){
    return (base * altura) / 2;
} 
console.groupEnd();


/// Codigo del Circulo
console.group("Circulos");

// Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

function diametroCirculo (radio){
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area

function areaCirculo (radio){
    return (radio *radio) * PI;

} 
// console.log("El area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();