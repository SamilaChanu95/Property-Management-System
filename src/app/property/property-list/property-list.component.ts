import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../interfaces/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  houseProperty: Array<Iproperty> = []; 
  //houseProperty: any; 

  constructor(private _housingService: HousingService) { }

  ngOnInit(): void {

    this._housingService.getAll().subscribe( (data: Array<Iproperty>) => {
        this.houseProperty = data;
      }
    );
  }

}
