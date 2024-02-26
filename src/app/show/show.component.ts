import { Servicio1Service } from './../servicio/servicio1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
  reser:any;
  mostrar:any;
  constructor( private Service1:Servicio1Service){}
  
  ngOnInit(): void {
    this.mostrarM();
  }

 

  mostrarM(){
    this.Service1.mostrar().subscribe({
      next:(data:any)=>{
        this.mostrar=data.users;
      },
      error:(e)=>{
        debugger
      }
    })
  }

  registerR(typeusers_id:any,numeroHabitacion:any, asientosReservados:any){
    debugger
    this.Service1.saveR(typeusers_id.value,numeroHabitacion.value, asientosReservados.value).subscribe({
      next:(data:any)=>{
        this.reser=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
