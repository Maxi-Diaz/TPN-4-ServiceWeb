export class Conversor {

    desde: string;
    a: string;
    valor:number;
    resultado: number

    conversor(desde?: string, a?:string, valor?:number, resultado?: number){
        this.desde = desde;
        this.a = a;
        this.valor = valor;
        this.resultado = resultado;
    }
}
