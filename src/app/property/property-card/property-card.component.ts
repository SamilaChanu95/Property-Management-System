import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-property-card',
    templateUrl: '/property-card.component.html',
    styleUrls: ['/property-card.component.scss']
})

export class PropertyCardComponent implements OnInit {
    houseProperty : any = {
        "Id" : 1,
        "Name": "Bala's House",
        "Type" : "House",
        "Price" : 12000 
    };

    constructor() {}

    ngOnInit() : void {}
}