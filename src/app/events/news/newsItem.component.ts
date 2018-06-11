import { Component } from '@angular/core';

import { NewsEvent } from 'app/model/newsEvent.model';


@Component({
    selector: 'news-item',
    templateUrl: './newsItem.component.html',
    styleUrls: [ './newsItem.component.scss' ]
})
export class NewsItemComponent {
    
    public model: NewsEvent
    
}
