import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Student } from "src/app/models/student";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  readonly URL_API = "http://localhost:3000/api/students";
  constructor(private http: HttpClient) {
   this.selectedStudent = new Student();
  }

  getStudents() {
    return this.http.get(this.URL_API);
  }

  postStudent(Student: Student) {
    return this.http.post(this.URL_API, Student);
  }

  putStudent(student: Student) {
    return this.http.put(this.URL_API + `${student._id}`, student);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
