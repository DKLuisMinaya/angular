import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor(private http:HttpClient) { }


  mostrar(){
    return this.http.get('http://127.0.0.1:3000/api/user');
  }
  

  saveC(lugar:any, cine:any){
    return this.http.post('http://localhost:3000/api/type/users',
      {
        lugar:lugar,
        cine:cine,
        
        
      }
    );

    
  }
  saveI(habitaciones:any, numeroHabitacion:any, capacidad:any, pelicula:any, typeusers_id:any){
    return this.http.post('http://localhost:3000/api/register',
      {
        habitaciones:habitaciones,
        numeroHabitacion:numeroHabitacion,
        capacidad:capacidad,
        pelicula:pelicula,
        typeusers_id:typeusers_id,
        
      }
    );
  }

  saveR(typeusers_id:any,numeroHabitacion:any, asientosReservados:any){
    return this.http.post('http://localhost:3000/api/reservar',
      {
        typeusers_id:typeusers_id,
        numeroHabitacion:numeroHabitacion,
        asientosReservados:asientosReservados
        
      }
    );
  }
}
