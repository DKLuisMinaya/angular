import { Component } from '@angular/core';
import { Servicio1Service } from '../servicio/servicio1.service';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  rtipo:any;

  constructor( private Service1:Servicio1Service){}

  registerC(lugar:any, cine:any){
    debugger
    this.Service1.saveC(lugar.value, cine.value).subscribe({
      next:(data:any)=>{
        this.rtipo=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
