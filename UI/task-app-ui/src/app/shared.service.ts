import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Shared } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  readonly apiUrl = 'https://localhost:44382/api/Task';

  formData: Shared = new Shared();

  taskList:Shared[];

  postTask(){
    return this.http.post(this.apiUrl, this.formData);
  }

  refreshTaskList(){
    return this.http.get(this.apiUrl).toPromise().then((res) => this.taskList = res as Shared[])
  }

  updateTask(){
    return this.http.put(`${this.apiUrl}/${this.formData.taskId}`,this.formData);
  }

  deleteTask(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
