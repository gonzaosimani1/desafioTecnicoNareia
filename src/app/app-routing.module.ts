import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiActividadComponent } from './mi-actividad/mi-actividad.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: 'mi-actividad', component: MiActividadComponent },
  { path: 'mi-actividad/detalle/:id', component: DetalleComponent },
  { path: '**', redirectTo: 'mi-actividad' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
