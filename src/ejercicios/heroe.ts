/*
let heroe: string = 'HEERON';
let player: string = 'jonathan';
let  hp: number = 95;
let  lvl: number = 15;
let state: boolean = true;
console.log(player, hp);

let habilidad1: string = 'Daño explosivo';
let habilidad2: string = 'Control';
let habilidad4: string = 'Movilidad';

let distrito: string = 'NDER';
let canton: string = 'Central';
let provincia: string = 'Eltha';
let codigo: number = 987;
let habilidades: (boolean | string | number)[] = ['Protección', 'Curación', 'Daño explosivo',15,82, true,'bot','NOREEH'];
habilidades.push(0.5);
console.log(habilidades);


let habilidades2: any = ['Daño continuo', 'Rompe escudos', 'Aguante',lvl,hp, state,player, heroe];
habilidades2.push(0.7);
console.log(habilidades2);

interface Heroe {
    heroe: string;
    player: string;
    hp: number;
    lvl: number;
    state: boolean;
    habilidades: (boolean | string | number)[];
    habilidad1: string;
    habilidad2: string;
    habilidad4: string;
    direccion: Direccion;
    mostrarHp: () => void;
    mostrarDireccion: () => void;

}
interface Direccion {
    distrito: string;
    canton: string;
    provincia: string;
    codigo: number;
}
const personaje: Heroe = {
    heroe: heroe,
    player: player,
    hp: hp,
    lvl: lvl,
    state: state,
    habilidad1: habilidad1,
    habilidad2: habilidad2,
    habilidad4: habilidad4,
    habilidades: [habilidad1, habilidad2, habilidad4, lvl, state,player, heroe],
    mostrarHp(){
        console.log('El hp actual del heroe es: ' + this.hp);
    },
    direccion: {
        distrito: distrito,
        canton: canton,
        provincia: provincia,
        codigo: codigo
    },
    mostrarDireccion(){
        console.log('la ubicacion del heroe:\n Distrito: ' + this.direccion.distrito + ',\n Canton: ' + this.direccion.canton + ', \n Provincia: ' + this.direccion.provincia + ', \n Codigo:' + this.direccion.codigo);
    }
}

console.table(personaje);



function concatenar (a,b){
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
const direccion = personaje.mostrarDireccion();
console.table(personaje);

*/