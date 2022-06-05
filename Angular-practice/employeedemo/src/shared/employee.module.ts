export class Employee
{
    public empid:number;
    public name:string;
    public imagepath:string;
    public designation:string;

    public constructor (empid:number, name:string,imagepath:string, designation:string)
    {
        this.empid=empid;
        this.name=name;
        this.imagepath=imagepath;
        this.designation=designation;
    }
}