import { Injectable } from '@angular/core';
import { Notas } from 'src/app/models/notas.models';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // constructor() { }
  
  //  // metodos que va a consumir el api
  // getAllNotes(){
  //   return this.http.get(`${this.urlApi}/getAll`)
  // }

  // createUser(data : User){
  //   return this.http.post(`${this.urlApi}/create`, data)
  // }

  // deleteUser(_id:string){
  //   return this.http.delete(`${this.urlApi}/delete/${_id}`)
  // }

  // updateUser( data:User){
  //   let dataToUpdate = {
  //     _id: data._id,
  //     dataToUpdate : data
  //   }
  //   return this.http.put(`${this.urlApi}/update`, data)
  // } 
}
