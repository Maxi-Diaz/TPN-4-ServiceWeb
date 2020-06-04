export class Informe {
    pais: string;
    confirmados: number;
    recuperados: number;
    fallecidos: number;

    informe(pais?: string, confirmados?: number, recuperados?: number, fallecidos?: number){
        this.pais = pais;
        this.confirmados = confirmados
        this.recuperados = recuperados
        this.fallecidos = fallecidos
    }
}
