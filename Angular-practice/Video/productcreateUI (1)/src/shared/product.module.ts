

export class Product
{
    public id:number;
    public title:string;
    public description:string;
    public imagepath:string;
    public quantity:number;
    public comments:string[];

    public constructor(id:number,title:string,description:string,imagePath:string,
        quantity:number,comments:string[]=[])
        {
         this.id=id;
         this.title=title;
         this.description=description;
         this.imagepath=imagePath;
         this.quantity=quantity;
         this.comments=comments;   
        }
}