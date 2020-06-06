export class Movie {
    title: string;
    year: string;
    length: string;
    rating: string;
    poster: string;
    plot: string;

    movie(title?: string, year?: string, length?: string, rating?: string, poster?: string, plot?: string) {
        this.title= title;
        this.year= year;
        this.length= length;
        this.rating= rating;
        this.poster= poster;
        this.plot= plot;
    }
}
