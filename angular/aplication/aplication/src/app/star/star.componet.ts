
import {Component ,Input, OnChanges} from "@angular/core";
import { NgModel } from "@angular/forms";



@Component({
    selector: 'app-star',
    templateUrl: './star.component.html'
   
})




 
export class StarComponent implements OnChanges{

    @Input() 
    rating: number = 0;
    starWidth: number;
    
    
    
    ngOnChanges(): void {
            this.starWidth = this.rating * 94 / 5;
            } 
}