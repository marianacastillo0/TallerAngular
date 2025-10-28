import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course-component/course-component';


@NgModule({
  imports: [
    CommonModule,
    CourseComponent
  ],
  exports: [CourseComponent]
})
export class CoursesModule { }
