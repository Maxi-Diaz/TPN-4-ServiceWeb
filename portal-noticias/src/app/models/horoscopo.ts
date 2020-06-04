export class Horoscopo {
    nombre: string;
    descripcion: string;
    fecha: string;
    tipo: string;

    horoscopo(nombre?: string, descripcion?: string, fecha?: string, tipo?: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.tipo = tipo;
    }

}
