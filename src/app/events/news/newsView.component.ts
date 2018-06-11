import { Component, ElementRef } from '@angular/core';

import { ModalService } from 'app/shared/modal/modal.service';
import { EventListService } from "app/eventList/eventList.service";
import { NewsEvent } from 'app/model/newsEvent.model';
import { ModalBaseComponent } from "app/shared/modal/modalBase.component";


@Component({
    selector: 'modal-news-view',
    templateUrl: './newsView.component.html',
    styleUrls: ['../../shared/modal/modal.component.scss']
})
export class NewsViewComponent extends ModalBaseComponent {

    private event: any;

    constructor(modalService: ModalService, el: ElementRef, private eventListService: EventListService) {
        super(modalService, el);
    }

    openEvent(event: any): void {
        this.event = event;
        super.open();
    }

    onRead(event: NewsEvent): void {
        event.isRead = true;
        this.eventListService.update(event);
        super.close();
    }

}
