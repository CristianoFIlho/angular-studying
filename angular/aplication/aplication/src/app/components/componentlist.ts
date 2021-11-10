import {Component, OnInit} from '@angular/core';
import { Course } from './component';
import { CourseService } from './course.service';
@Component({
  selector: 'app-componentlist',
  templateUrl: './componentlist.component.html'
  
})

export class ComponentList implements OnInit {
    courses: Course[] = [];

    constructor(private courseService: CourseService) { }
    
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }
}