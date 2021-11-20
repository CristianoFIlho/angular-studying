import {Component, OnInit} from '@angular/core';
import { Course } from './component';
import { CourseService } from './course.service';
@Component({
//   selector: 'app-componentlist',
  templateUrl: './componentlist.component.html'
  
})

export class ComponentList implements OnInit {
    courses: Course[] = [];

    _filterBy: string; 
    filteredCourses: Course[] = []; 

    constructor(private courseService: CourseService) { }
    
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
        this.filteredCourses = this.courses;
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) > -1);
    }

    
    get filter() {
        return this._filterBy;
    }
}
