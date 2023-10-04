import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

    constructor(private http:HttpClient) {
    }

    public getAll(): Observable<any> {

      return this.http.get('data/properties.json');
    }

}
