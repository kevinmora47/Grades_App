import { Component, OnInit } from "@angular/core";
import { StudentService } from "../services/student.service";
import { NgForm } from "@angular/forms";
import { Student } from "src/app/models/student";

declare var M: any;

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudent();
  }

  addStudent(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.studentService.putStudent(form.value).subscribe(res => {
        this.resetform(form);
        this.getStudent();
        M.toast({ html: "Student updated!" });
        console.log("updated!");
        this.resetform(form);
      });
    } else {
      this.studentService.postStudent(form.value).subscribe(res => {
        console.log(res);
        this.getStudent();
        this.resetform(form);
        M.toast({ html: "Saved Succesfully!" });
      });
    }
  }

  getStudent() {
    this.studentService.getStudents().subscribe(res => {
      this.studentService.students = res as Student[];
      console.log(res);
    });
  }

  editStudent(student: Student) {
    this.studentService.selectedStudent = student;
  }

  deleteStudent(_id: string) {
    if (confirm("Are you sure that you want to delete it?")) {
      this.studentService.deleteStudent(_id).subscribe(res => {
        this.getStudent();
        this.resetform();
        M.toast({ html: "Delete Succesfully!" });
      });
    }
  }

  resetform(form?: NgForm) {
    if (form) {
      form.reset();
      this.studentService.selectedStudent = new Student();
    }
  }
}
