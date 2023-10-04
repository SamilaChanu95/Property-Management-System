import { Component, Input, OnInit } from "@angular/core";
import { Property } from "../models/property";

@Component({
    selector: 'app-property-card',
    templateUrl: '/property-card.component.html',
    styleUrls: ['/property-card.component.scss']
})

export class PropertyCardComponent implements OnInit {
    @Input() hProperty: Property = new Property();

    constructor() {}

    ngOnInit() : void {
        console.log("instanceof ", typeof this.hProperty);
        console.log("hProperty ", this.hProperty);
    }
}