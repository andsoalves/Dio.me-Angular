import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges { 

    @Input()
    rating: number | number = 0;
    
    starWidth?: number | number;
    
    ngOnChanges(): void { 
        this.starWidth = this.rating * 74 / 5;
    }

}