import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Property } from '../property/models/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

    constructor(private http:HttpClient) {
    }

    public getAll(): Observable<any> {
      // return this.http.get('data/properties.json');

      return this.http.get('data/properties.json').pipe(
        map(data => {
          let hProperty: Array<Property> = [];
          const dataObject = JSON.parse(JSON.stringify(data));
          for (const item in dataObject) {
            if (dataObject.hasOwnProperty(item)) 
            {
              // console.log("dataObject[item] :", dataObject[item]);
              hProperty.push(dataObject[item]);
            }
          }
          // console.log("hProperty :", hProperty);
          return hProperty;
        })
      )
    }

}
