class Employee
{
    static counter = 0;
    constructor ()
    {
    }
    // constructor (eid, enm, esal)
    // {
    //     this._empId_=eid;
    //     this._empName_=enm;
    //     this.empSal=esal;
    // }
    
    //---------Get & Set----------

    get empId()
    {
        console.log("Getter for _empId_");
        return this._empId_;
    }
    set empId (eid) 
    {
        console.log("Setter for empId");
        this._empId_=eid;
    }
    get empName()
    {
        console.log("Getter for _empName_");
        return this._empName_;
    }
    set empName (enm) 
    {
        console.log("Setter for empName");
        this._empName_=enm;
    }
    getEmpSal()
    {
        console.log("Getter for empSal");
        return this._empName_;
    }
    setEmpSal (esal) 
    {
        console.log("Setter for empSal");
        this.empSal=esal;
    }

    //---------Display info----------
    dispEmpInfo()
    {
        return "EMPID: " + this._empId_ + '\n' +
                "EmpName: " + this._empName_ + '\n' + 
                "EmpSalary: " + this.empSal
    }

    calcEmpAnnualSal()
    {
        return this.empSal*12;
    }

    static getCounter()
    {
        return Employee.counter+1;
    }
}

//var emp1 = new Employee(899, "VH",1000.0);
var emp2 = new Employee();
emp2.empId = 999;
emp2.empName = "VH";
emp2.setEmpSal(1000.0);
console.log("Emp Info: " + emp2.dispEmpInfo() + " Annual Salary: " + emp2.calcEmpAnnualSal())
