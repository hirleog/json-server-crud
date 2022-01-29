import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

url = "http://localhost:3000/cars";

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

getCars(): Observable<Car[]> {
  return this.http.get<Car[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
}

getCarById(id: number): Observable<Car>{
  return this.http.get<Car>(`this.url/${id}`)
  .pipe(
    retry(2)
  )
}
