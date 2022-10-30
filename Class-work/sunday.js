
class Employee {
    constructor (name = "" , dept = "general" ){
        this.name = name;
        this.dept = dept;
    }
}

class Manager extends Employee {
    constructor (){
        this.reports = []
    }

}

Manager.prototype = new Employee

class WorkBee extends Employee{
    constructor (){
        this.projects = []
    }
}

WorkBee.prototype = new Employee

class SalesPerson extends WorkBee {
    constructor(){
        this.dept= "sales";
        this.quota = 100;
    }

}

SalesPerson.prototype = new WorkBee

class Engineer extends WorkBee {
    constructor() {
        this.dept = "engineering"
        this.machine = ""
    }
}
Engineer.prototype = new WorkBee