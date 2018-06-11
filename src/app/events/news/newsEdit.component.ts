import { Component } from '@angular/core';

import { NewsEvent } from 'app/model/newsEvent.model';


@Component({
    selector: 'news-edit',
    templateUrl: './newsEdit.component.html',
    styleUrls: ['./newsEdit.component.scss']
})
export class NewsEditComponent {

    public model: NewsEvent;

}
