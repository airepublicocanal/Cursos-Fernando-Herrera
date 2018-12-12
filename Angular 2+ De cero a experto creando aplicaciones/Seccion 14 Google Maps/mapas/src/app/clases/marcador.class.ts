export class Marcador {

    public titulo = 'Sin Título';
    public desc = 'Sin Descripción';

    // Esto es igual a crear las propiedades fuera y hacer el igual en el constructor
    constructor(public lat: number, public lng: number) {

    }
}