import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from './mi-actividad.mock';
import { Router } from '@angular/router';
import { Servicio } from '../shared/interfaces/servicio-model';

@Component({
  selector: 'app-mi-actividad',
  templateUrl: './mi-actividad.component.html',
  styleUrl: './mi-actividad.component.css'
})
export class MiActividadComponent implements OnInit{

  fuenteDatos: Servicio[] = MOCK_DATA;
  datosFiltrados: Servicio[] = MOCK_DATA;
  columnas: string[] = ['icono', 'nombreServicio', 'referencia', 'fechaPago', 'importe', 'descarga'];
  filtro: string = '';
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  descargar() {
  }

  filtrarTabla(filtro: string) {
    this.datosFiltrados = this.fuenteDatos.filter((row) =>
      row.nombreServicio.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  verDetalle(event: MouseEvent, id: number) {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() !== 'img') {
      this.router.navigate(['mi-actividad/detalle', id]);
    }

  }

}
