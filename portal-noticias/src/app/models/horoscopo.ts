export class Horoscopo {
    name: string;
    start_date: Date;
    end_date: Date;

    horoscopo( name?: string, start_date?: Date, end_date?: Date) {
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
    }

}
