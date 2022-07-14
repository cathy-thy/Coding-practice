export class Product
{
    public id:number;
    public title:string;
    public description:string;
    public imagepath:string;
    public quantity:number;
    public comments:string[];

    //creating class with constructor
    public constructor(id:number, title:string, description:string, imagepath:string,
        quantity:number, comments:string[]=[])
        {
           this.id=id;
           this.title=title;
           this.description=description;
           this.imagepath=imagepath;
           this.quantity=quantity;
           this.comments=comments;
        }
}