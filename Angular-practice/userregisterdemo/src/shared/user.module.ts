export class User 
{
    public name:string;
    public mobileno:string;
    public email:string;
    public address:string;
    public id:string;
    public taxno:string;
    public location:string;

    public constructor (name:string, mobileno:string, email:string, 
                        address:string, id:string, taxno:string, 
                        location:string)
        {
            this.name = name;
            this.mobileno = mobileno;
            this.email = email;
            this.address = address;
            this.id = id;
            this.taxno = taxno;
            this.location = location;
        }
}
