import { Component, Input, OnInit } from "@angular/core";
import { Iproperty } from "../interfaces/iproperty";
import { Property } from "../models/property";

@Component({
    selector: 'app-property-card',
    templateUrl: '/property-card.component.html',
    styleUrls: ['/property-card.component.scss']
})

export class PropertyCardComponent implements OnInit {
    // @Input() hProperty: Property = new Property();
    @Input() hProperty: Property = new Property();
    propertyId: number = 0;

    constructor() {}

    ngOnInit() : void {
        // this.propertyId = this.hProperty.Id;
        console.log("propertyId ", this.propertyId);
        // console.log("hProperty ", this.hProperty);
    }
}