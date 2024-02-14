import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from '../shared/interfaces/servicio-model';
import { MOCK_DATA } from '../mi-actividad/mi-actividad.mock';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  detalleId: string | null = null;
  fuenteDatos: Servicio[] = MOCK_DATA;
  detalleServicio: Servicio = {
    icono: '',
    nombreServicio: '',
    referencia: '',
    fechaPago: '',
    importe: 0,
    id: 0
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.detalleId = params.get('id');
      if (this.detalleId) {
        const idNumero = parseInt(this.detalleId, 10);
        const servicioEncontrado = this.fuenteDatos.find(servicio => servicio.id === idNumero);

        this.detalleServicio = servicioEncontrado || this.detalleServicio;
      }
    });

  }

  irAlInicio() {
    this.router.navigate(['mi-actividad']);
  }

  compartir() {

  }
}
