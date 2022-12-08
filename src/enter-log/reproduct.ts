let tiempo : number = 4;
let cancion : string = 'Circuits';
let autor : string = 'Klangkarussell';
let anio : number = 2017;

interface Reproductor {
    volumen: number;
    tiempo: number;
    cancion: string;
    detalles: Detalles;
};
interface Detalles {
    autor: string;
    anio: number;
};

const reproductor: Reproductor = {
    volumen: volumen,
    tiempo: tiempo,
    cancion: cancion,
    detalles:
    { 
        autor: autor, 
        anio: anio 
    }
}
const {volumen: vol, tiempo: time, cancion: song, detalles: {autor: aut, anio: year}} = reproductor;

console.log(reproductor);
console.log('Reproduciendo: ' + song + ',\n Autor: ' + reproductor.detalles.autor);
console.log('Volumen: ' + vol);