
/*
    ===== Código de TypeScript =====
*/

class empleado{
    constructor(
        public name : string,
        public code : string,
        public position : string,
    ){}

}
class proyecto extends empleado{

    //constructor 
    constructor
    (
         public nombre: string,
         public codigo: string, 
         public fecha: Date, 
         public estado: boolean
         ){ super( nombre ,' A-01','SEO') }

}



const proyecto1 = new proyecto('Eva', 'E1', new Date(), true);


console.log(proyecto1);
