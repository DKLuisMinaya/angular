import { Component } from '@angular/core';
import { Servicio1Service } from '../servicio/servicio1.service';

@Component({
  selector: 'app-interior',
  standalone: true,
  imports: [],
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.css'
})
export class InteriorComponent {
  ptipo:any;

  constructor( private Service1:Servicio1Service){}

  registerH(habitaciones:any, numeroHabitacion:any, capacidad:any, pelicula:any, typeusers_id:any){
    debugger
    this.Service1.saveI(habitaciones.value, numeroHabitacion.value, capacidad.value, pelicula.value, typeusers_id.value).subscribe({
      next:(data:any)=>{
        this.ptipo=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
