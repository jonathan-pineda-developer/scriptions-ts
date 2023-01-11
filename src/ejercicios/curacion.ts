/*function concatenar (a,b){
    return a + b;
}

const resultado = concatenar('Jona','-than');
console.log(resultado);

function aumentarVida (c: number,d: number) : number {
    return c + d;
}
const aumentoVida = aumentarVida(0.02,0.01);

const aumentoVidaFlecah = (c: number,d: number) : number =>{
    return c + d;
} 

console.log(aumentoVida);
console.log(aumentoVidaFlecah(0.01,0.0125));



let h:number = 0.4;
function multiplicarCuracion (f: number, g: number, h?: number) : number{
    let resultado: number = 0;
    let notification: string = '';
    if(h){
        resultado = f * g * h;
        notification = 'El hp curado con el requerimiento ( f - g - h? ) es de:  (' + resultado + ') y los numeros enviados fueron:  f: requerido (' + f + ') , g: requerido (' + g + ') y h como opcional (' + h + ')';
        console.log(notification);
        return resultado;
    }else{
        resultado = f * g;
        notification = 'El hp curado con el requerimiento ( f - g ) es de:  (' + resultado +') y los numeros enviados fueron: f: requerido (' + f + '), g: requerido (' + g + ') y h no se envia (' + h + ')' ;
       console.log(notification);
        return resultado;
    }
}
console.log(multiplicarCuracion(0.2,0.3));
console.log(multiplicarCuracion(0.2,0.3,h));

function curar(personaje:Heroe,curarX:number): void {

    personaje.mostrarHp();
    personaje.hp += curarX;
    console.log('El hp modificado del heroe es: ' + personaje.hp);

}

curar(personaje,multiplicarCuracion(0.2,0.3,h));
console.table(personaje);
 */