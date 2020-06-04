export class Conversor {

    desde: string;
    para: string;
    valor:number;
    total: number

    conversor(desde?: string, para?:string, valor?:number, total?: number){
        this.desde = desde;
        this.para = para;
        this.valor = valor;
        this.total = total;
    }
}
