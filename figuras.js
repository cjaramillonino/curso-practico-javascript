// Código del cuadrado
console.group("CUADRADOS");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + " cm2.");

console.groupEnd();

// Código del triángulo
console.group("TRIÁNGULOS");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm.");

function perimetroTriangulo(lado1, lado2, ladoBase) {
  return lado1 + lado2 + ladoBase;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm.");

function areaTriangulo(ladoBase, altura) {
  return (ladoBase * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + " cm2.");

console.groupEnd();

// Código del Círculo
console.group("CÍRCULOS");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm.");

function areaCirculo(radio) {
  return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + " cm2.");

console.groupEnd();

// INTERACCIÓN CON HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = parseFloat(input1.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = parseFloat(input2.value);
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = parseFloat(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = parseFloat(input3.value);
  const input4 = document.getElementById("InputTriangulo4");
  const value4 = parseFloat(input4.value);

  const area = areaTriangulo(value3, value4);
  alert(area);
}