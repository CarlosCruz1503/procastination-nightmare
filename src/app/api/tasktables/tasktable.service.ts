import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskTable } from 'src/app/models/tasktables.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class TasktableService {
  urlApi = `${environment.API_URI}/task`
  taskToCreate: TaskTable = new TaskTable()
  allTasks: TaskTable[] = []
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0OTI0NzU1NzZhMjRlODBjOGNjZmI0ZSIsIm5hbWUiOiJDYXJsb3NDcnV6IiwiZW1haWwiOiJjYXJsb3NjcnVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMEZXckpQdi5LeUFJYUNFZlUwbnNxT3RONzdjNGNnWWIvVHlMdktkNmVqaUxNV29YemQ4eEciLCJpbWFnZSI6bnVsbH0sImlhdCI6MTY4NzM5Nzg2Mn0.Ct7mGJnck_1fVyefdhGL6E9TeB_N4gtYsTpLm0QMRcQ'

  constructor(private http:HttpClient) { }

  getAllTasks(){
    console.log(this.urlApi)
    return this.http.get(`${this.urlApi}/getTasks`, { headers: new HttpHeaders({'Authorization': 'key ' + this.token})}) 
  }
}
