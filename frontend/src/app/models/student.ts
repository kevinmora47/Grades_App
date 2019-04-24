export class Student {
  constructor(_id = '',name = '',lastName = '',secondSurname = '',grades = 0) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.secondSurname = secondSurname;
    this.grades = grades;
  }

  _id: string;
  name: string;
  lastName: string;
  secondSurname: string;
  grades: number;
}
