// const lista1 = [
//   100,
//   200,
//   500,
//   800,
//   400000000,
// ];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
};

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

function calcularMediana(lista) {

  function compareNumbers(a, b) {
    return a - b;
  }

  let listaOrdenada = lista.sort(compareNumbers);

  const mitadLista = parseInt(lista.length / 2);

  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElementos;
  } else {
    mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}

