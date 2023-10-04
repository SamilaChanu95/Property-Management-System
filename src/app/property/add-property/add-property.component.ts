import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  constructor(private _router: Router) {}

  ngOnInit() : void {

  }

  onBack() 
  {
    this._router.navigate(['/']);
  }

}
