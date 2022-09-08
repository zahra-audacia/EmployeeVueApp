import { Guid } from "guid-typescript";

export class Employee {
  // id: Guid;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  startDate: Date;
  role: string;
  salary: number;

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    startDate: Date,
    role: string,
    salary: number
  ) {
    // this.id = Guid.create();
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.startDate = startDate;
    this.role = role;
    this.salary = salary;
  }
}
