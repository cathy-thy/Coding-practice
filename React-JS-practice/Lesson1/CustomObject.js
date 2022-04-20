/*
Custom Object Using 
    1. Constructor function syntax
        Inherit using prototype

    2. Inline object creation syntax
        Inherit using __proto__

    3. Object object
        Inherit using Object.create()
*/

// Method 1: Constructor function syntax
function Employee1 (eid, enm, esal){
    this.empID = eid;
    this.empName = enm;
    this.empSal = esal;
    this.dispEmpInfo = function()
    {
        return "EMPID: " + this.empID + '\n' +
                "EmpName: " + this.empName + '\n' + 
                "EmpSalary: " + this.empSal
    };
    this.calcEmpAnnualSal = function()
    {
        return this.empSal*12;
    };
}

var emp1 = new Employee1 (111, "First Employee", 100.0);
console.log("===Employee 1===" + '\n' + emp1.dispEmpInfo() + '\n' + "==============="+ '\n');


function Manager1 (dept, comm)
{
    this.deptname = dept;
    this.commission = comm;
    this.displayMgrInfo = function()
    {
        return this.dispEmpInfo() +'\n' + 
        "DeptName: " + this.deptname;
    }
    this.calcMgrAnnualSal = function()
    {
        return (this.calcEmpAnnualSal() + (this.commission));
    };
}

Manager1.prototype = new Employee1(789, "Finance", 12000.0);
var manager1 = new Manager1 ("Manager 1", 8000.0);
console.log("===Manager 1===" +'\n' + "Manager Info: " + manager1.displayMgrInfo() + 
"Manager Annual Salary: " + manager1.calcMgrAnnualSal()+ '\n' + "==============="+ '\n');
//End of Method 1


//Method 2: inline object creation syntax
var emp2 = {
    empID:222,
    empName:"Second Employee",
    empSal:2000.0,
    dispEmpInfo : function()
    {
        return "EMPID: " + this.empID +'\n' + 
                "EmpName: " + this.empName +'\n' + 
                "EmpSalary: " + this.empSal
    },
    calcEmpAnnualSal : function()
    {
        return this.empSal*12;
    }
}
//console.log("===Employee 2===", '\n', emp2.dispEmpInfo());

var manager2 = {
    deptname : "HR",
    commission : 2200,
    displayMgrInfo : function()
    {
        return this.dispEmpInfo() +'\n' + "DeptName: " + this.deptname;
    },
    calcMgrAnnualSal : function()
    {
        return (this.calcEmpAnnualSal() + (this.commission));
    }
}

//Assume emp2 promoted to manager   
manager2.__proto__ = emp2;
console.log("===Manager 2==="+'\n' + 
            "Manager Info: " + manager2.displayMgrInfo() +'\n' + 
            "Manager Annual Salary: " + manager2.calcMgrAnnualSal()+'\n' +
            "=============="+ '\n');
//End of Method 2

//Method 3 Object object 
var emp3 = new Object();
emp3.empID = 333;
emp3["empName"] = "Third Employee";
emp3.empSal = 3000.0;
emp3["dispEmpInfo"] = function()
{
    return "EMPID: " + this.empID + '\n' +  
            "EmpName: " + this.empName + '\n' + 
            "EmpSalary: " + this.empSal;
};
emp3["calcEmpAnnualSal"] = function()
{
    return this.empSal*12;
};
console.log("===Employee 3===" + '\n' + 
            emp3.dispEmpInfo() + '\n' +
            "================"+ '\n'
);

var manager3 = Object.create(emp3);
manager3.deptname = "Sales";
manager3.commission = 3300;
manager3.displayMgrInfo = function()
{
    return this.dispEmpInfo() +'\n' + "DeptName: " + this.deptname; 
}
manager3.calcMgrAnnualSal = function()
{
    return (this.calcEmpAnnualSal() + (this.commission));
}
console.log("===Manager 3==="+'\n' + 
            "Manager Info: " + manager3.displayMgrInfo() +'\n' + 
            "Manager Annual Salary: " + manager3.calcMgrAnnualSal()+'\n' +
            "=============="+ '\n');

//End of Method 3