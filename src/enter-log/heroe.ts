/*let heroe: string = 'HEERON';
let player: string = 'jonathan';
let  hp: number = 95;
let  lvl: number = 15;
let state: boolean = true;
console.log(player, hp);

let habilidad1: string = 'Daño explosivo';
let habilidad2: string = 'Control';
let habilidad4: string = 'Movilidad';

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
    mostrarHp: () => void;

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
    }
}

console.table(personaje);
*/