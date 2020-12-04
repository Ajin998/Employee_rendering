 export class EmployeeClass {
  // entire class definition
  constructor(name, lastName, company) {
    this.empid = "emp" + Date.now();
    this.firstName = name;
    this.lastName = lastName;
    this.company = company;
  }
  printName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
