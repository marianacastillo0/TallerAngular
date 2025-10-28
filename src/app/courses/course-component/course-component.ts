import { Component, OnInit } from '@angular/core';
import{Course} from '../../course/course';
import{dataCourses} from '../../course/dataCourses';

@Component({
  selector: 'app-course-component',
  standalone: false,
  templateUrl: './course-component.html',
  styleUrls: ['./course-component.css']

})
export class CourseComponent implements OnInit {
  courses: Array<Course> = [];
  constructor() {}
  getCoursesList():Array<Course>{
    return dataCourses;
  }

   ngOnInit() {
    this.courses = this.getCoursesList(); 
   }

}
