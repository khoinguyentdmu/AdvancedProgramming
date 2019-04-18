import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public API_URL = "http://localhost:8080/todo/";

  constructor(private http: HttpClient) { }

  public postToDo(msg: string): Observable<any> {
    return this.http.post(this.API_URL, JSON.stringify({
      name: msg
    }), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public getAllToDo(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  public deleteToDo(id: number): Observable<any> {
    return this.http.delete(this.API_URL + id);
  }

  // public editToDo(id: number, msg: string): Observable<any> {
  //   return this.http.post(this.API_URL, JSON.stringify({
  //     id: id,
  //     name: msg
  //   }), {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   });
  // }
}
