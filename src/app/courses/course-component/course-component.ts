import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../course/course';
import { dataCourses } from '../../course/dataCourses';

@Component({
  selector: 'app-course-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-component.html',
  styleUrls: ['./course-component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course | null = null;

  constructor() {}

  getCoursesList(): Course[] {
    return dataCourses;
  }

  ngOnInit() {
    this.courses = this.getCoursesList();
  }

  selectCourse(c: Course) {
    this.selectedCourse = c;
  }

  applyFilter() {
    // filtering removed per request
  }

  clearFilter() {
    // filtering removed per request
  }

  get seasonsAverage(): number {
    return 0;
  }

}
