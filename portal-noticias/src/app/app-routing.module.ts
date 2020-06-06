import { MoviesComponent } from './components/movies/movies.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'horoscopo', component: HoroscopoComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'movie', component: MoviesComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'noticias'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
