import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course-component';
import { Course } from '../../course/course';
import { dataCourses } from '../../course/dataCourses';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses on init', () => {
    component.ngOnInit();
    expect(component.courses.length).toBeGreaterThan(0);
    expect(component.courses[0]).toBeInstanceOf(Course);
  });
});
