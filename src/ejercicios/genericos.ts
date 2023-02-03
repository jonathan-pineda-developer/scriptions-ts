function generica<T>(template: T){
    return template;
}

let stringGenerico = generica('Jona');
let numeroGenerico = generica(10);
let arregloGenerico = generica([1,2,3,4,5,6,7,8,9,10]);
let objetoGenerico = generica({nombre: 'Jona', edad: 25});
let ExplicitoGenerico = generica<string>('than');