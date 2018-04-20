import { Component } from '@angular/core';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'teacher-root',
  templateUrl: './teacher.component.html'
  
})
export class TeacherComponent {

  title = 'teacher';

  teachers = [];
  constructor(private teacherservice: TeacherService) {

  }
  ngOnInit() {

   // this.teacherservice.getTeachers()
    //  .subscribe(resTeacherData => this.teachers = resTeacherData);
  }
}
