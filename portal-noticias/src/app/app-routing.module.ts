import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'horoscopo', component: HoroscopoComponent },
  { path: 'deportes', component: DeportesComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'noticias'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
