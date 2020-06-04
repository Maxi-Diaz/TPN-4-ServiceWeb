export class Noticias {
    id: number;
    tit:string;
    des:string;
    img:string;

    noticias(id?:number, tit?:string, des?:string, img?:string){
        this.id = id
        this.tit = tit
        this.des = des
        this.img = img
    }
}
