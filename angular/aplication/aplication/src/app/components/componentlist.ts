import {Component, OnInit} from '@angular/core';
import { Course } from './component';
@Component({
  selector: 'app-componentlist',
  templateUrl: './componentlist.component.html'
  
})

export class ComponentList implements OnInit {
    components: Course[] = [];
    
    ngOnInit(): void {
        this.components = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
                
                price: 100,
                code: '123-weq',
                duration: 2313,
                rating: 10,
                releaseDate: '12-12-12'
            },
            {
                id: 2,
                name: 'React',
                imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',

                price: 1001,
                code: '123-wet',
                duration: 2300,
                rating: 10,
                releaseDate: '12-12-11'
            },
            {
                id: 3,
                name: 'Vue',
                imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
                price: 101,
                code: '123-wea',
                duration: 2200,
                rating: 10,
                releaseDate: '12-12-10'
                
            }
        ];
    }
}