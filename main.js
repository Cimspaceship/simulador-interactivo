function calcularPrecioFinal (precioTeclado, porcentajeDescuento, costoEnvio) {
    let descuento = (precioTeclado * porcentajeDescuento) / 100
    let precioConDescuento = precioTeclado - descuento;
    return (precioConDescuento + costoEnvio)
}

const envio = 1200;
let teclado = parseFloat(prompt("Ingrese el precio del teclado:"))
let descuento = parseInt(prompt("Ingresar porcentaje de descuento:")) 
let precioFinal = calcularPrecioFinal(teclado,descuento, envio)

alert("El precio total de la compra es $" + precioFinal)




