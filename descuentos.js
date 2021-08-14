// const precioOriginal = 120;
// const descuento = 18;

const cupones = [
  { name: "Ago2135P", discount: 35, },
  { name: "Ago2115P", discount: 15, },
  { name: "Ago2125P", discount: 25, },
  { name: "Ago2145P", discount: 45, },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceCupon() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  const validacionCupon = function (cupon) {
    return cupon.name === cuponValue;
  };

  const userCupon = cupones.find(validacionCupon);

  if (!userCupon) {
    alert("El cupón " + cuponValue + " que ingresaste, no es válido");
  } else {
    let descuento = userCupon.discount;
    const precioCalculado = calcularPrecioConDescuento(priceValue, descuento);
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El precio con descuento es de $ ${precioCalculado}`;
  }
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// })