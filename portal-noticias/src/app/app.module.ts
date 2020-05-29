import { FooterComponent } from './components/layout/footer.component';
import { HeaderComponent } from './components/layout/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HoroscopoComponent,
    EstadisticasComponent,
    NoticiasComponent,
    DeportesComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
