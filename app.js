let pedidodeproducto = Number(prompt("Ingrese el precio del producto"))
let pedidodecuotas = Number(prompt("Ingrese cantidad de cuotas (hasta 12)"))
let resultado;


resultado = alert("El precio por cuotas es de:" + pedidodeproducto / pedidodecuotas)
if (pedidodecuotas <= 12 ) {
 const dividir = (pedidodeproducto, pedidodecuotas) => {
     let resultado;
     resultado = pedidodeproducto / pedidodecuotas
    return resultado}

 console.log(dividir(pedidodeproducto, pedidodecuotas))
} else {
    alert("Solo puedes solicitar hasta 12 cuotas!")
}
