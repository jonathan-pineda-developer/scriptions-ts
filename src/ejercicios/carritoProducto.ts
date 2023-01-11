
import { impuestoSV, Producto } from './producto';

const carritoCompra :  Producto[]  =  [

    {
        nombre: 'VisorX System',
        precio: 250
    },
    {
        nombre: 'ReportX System',
        precio: 300
    }
];

const  [ total, impuesto ] =  impuestoSV ( carritoCompra );

console . log ( 'Total Exportado: ' , total );
console . log ( 'Impuesto Exportado: ' , impuesto );

