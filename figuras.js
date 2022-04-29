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
    return (radio * radio) * PI;

} 

// console.log("El area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();                                                                                                 


// Aqui interactuamos con el HTML

//Funciones en Html del Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro) ;

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert (area);  
}

//Funciones en Html del Triangulo 

function calcularPerimetroTriangulo(){
     const inputLado1 = document.getElementById("InputTrianguloLado1");
     const valueLado1 = parseInt(inputLado1.value);
     const inputLado2 = document.getElementById("InputTrianguloLado2");
     const valueLado2 = parseInt(inputLado2.value);
     const inputB = document.getElementById("InputTrianguloBase");
     const valueBase = parseInt(inputB.value);

     const Perimetro =  perimetroTriangulo (valueLado1 , valueLado2 , valueBase);
     alert(Perimetro);

}

function calcularAreaTriangulo() {
    const inputB = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputB.value);

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = parseInt(inputAltura.value);

    const area = areaTriangulo (valueBase, valueAltura);
    alert (area);  
}

//Funciones en HTML del Circulo 

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculoRadio")
    const value = parseInt(input.value);

    const Diametro = diametroCirculo (value);
    alert (Diametro)
}

function calcularPerimetroCirculo (){
    const input = document.getElementById("InputCirculoRadio")
    const value = parseInt(input.value);

    const Diametro = diametroCirculo (value);
    const Perimetro = perimetroCirculo (Diametro);
    alert (Perimetro);
}

function calcularAreaCirculo () {
    const input = document.getElementById("InputCirculoRadio")
    const value = parseInt(input.value);

    const area = areaCirculo (value);
    alert (area);
}



