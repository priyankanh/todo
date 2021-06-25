import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { list } from 'src/app/store/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://localhost:3000/todos');
  }

  addtask(data: any)  
  {
    return this.http.post('http://localhost:3000/todos', data);/* .
    subscribe((result) =>{
    console.log("result",result);
    })    */
  }  
  deletetask(id: number)  
  {
    return this.http.delete('http://localhost:3000/todos/' + id);
  } 
  updatetask(data : any)  
  {
    console.log(data);
    return this.http.put('http://localhost:3000/todos/' + data.id , data);
  }  

} 
