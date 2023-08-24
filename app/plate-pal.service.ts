import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatePalService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getAllNumberPlates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/NumberPlate`);
  }

  addNumberPlate(newPlate: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/NumberPlate`, newPlate);
  }

  updateNumberPlate(id: string, updates: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/NumberPlate/${id}`, updates);
  }

  deleteNumberPlate(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/NumberPlate/${id}`);
  }
}
