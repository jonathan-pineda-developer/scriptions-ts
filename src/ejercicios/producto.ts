export interface Producto {
    nombre: string;
    precio: number;
}

const celular: Producto = {
    nombre: 'Samsung M32',
    precio: 350
}

const tuberculo: Producto = {
    nombre: 'Yuca',
    precio: 100
}

export function impuestoSV( productos: Producto[]): [number, number] {
    let impuesto = 0;

    productos.forEach( ({precio})=> { 
        impuesto += precio;
    })
    return [impuesto, impuesto * 0.15];
}

function impuestoSV2( [total, impuesto]: [number, number]): number {
  let final = total + impuesto; 
    return final;
}

const productos = [celular, tuberculo];
const [impuesto,precio]= impuestoSV(productos);
const final = impuestoSV2([impuesto,precio]);


console.log('El impuesto es: ' + impuesto);
console.log('El precio es: ' + precio);
console.log('El precio final es: ' +final) ;