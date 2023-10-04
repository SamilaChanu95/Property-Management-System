export class Property {
    Id : number;
    Name : string;
    Type : string;
    Price : number; 

    constructor(Id: number = 0, Name: string = '', Type: string = '', Price: number = 0)
    {
        this.Id = Id;
        this.Name = Name;
        this.Type = Type;
        this.Price = Price;
    }
}