import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {
  propertyId: number = 0;
  nextId: number = 0;

  constructor (private _routes: ActivatedRoute, private _router: Router) {}

  ngOnInit() : void {
    this.propertyId = +this._routes.snapshot.params['propertyId'];
    
    this._routes.params.subscribe((params) => 
      {
        console.log("proprty id now :", this._routes.snapshot.params['propertyId']);
        this.propertyId = +params['propertyId'];
      }
    );
  }

  onNextPage() : void {
    this.propertyId += 1;
    this._router.navigate(['/property-details/', this.propertyId])
  }

}
