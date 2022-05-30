import { Injectable } from '@angular/core';
import { Tasks } from 'src/app/Tasks.types';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Tasks[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Tasks[]>(this.apiUrl);
  }

  deleteTask(task: Tasks): Observable<Tasks> {
    return this.http.delete<Tasks>(`${this.apiUrl}/${task.id}`);
  }

  toggleUpdate(task: Tasks): Observable<Tasks> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Tasks>(url, task, httpOptions);
  }

  addNewTask(newTask: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.apiUrl, newTask);
  }
}
