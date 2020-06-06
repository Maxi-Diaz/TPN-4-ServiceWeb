import { FooterComponent } from './components/layout/footer.component';
import { HeaderComponent } from './components/layout/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './components/movies/movies.component';
import { UrlPipe } from './pipes/url.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HoroscopoComponent,
    EstadisticasComponent,
    NoticiasComponent,
    CotizacionComponent,
    MoviesComponent,
    UrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
