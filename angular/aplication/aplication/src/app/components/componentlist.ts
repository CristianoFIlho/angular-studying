import {Component, OnInit} from '@angular/core';
import { Course } from './component';
import { CourseService } from './course.service';
@Component({
  selector: 'app-componentlist',
  templateUrl: './componentlist.component.html'
  
})

export class ComponentList implements OnInit {
    courses: Course[] = [];

    _filterBy: string; 

    constructor(private courseService: CourseService) { }
    
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }

    set filter(value: string) {
        this._filterBy = value;
    }

    get filter() {
        return this._filterBy;
    }
}