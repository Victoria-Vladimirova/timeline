import { Component } from '@angular/core';

import { EventListService, SortOrder } from 'app/eventList/eventList.service';
import { BusinessEvent } from 'app/model/businessEvent.model';
import { ModalService } from 'app/shared/modal/modal.service';
import { EventComponentService } from 'app/events/eventComponent.service';


const PAGESIZE = 10;

@Component({
    selector: 'event-list',
    templateUrl: './eventList.component.html',
    styleUrls: ['./eventList.component.scss']
})
export class EventListComponent {

    events: BusinessEvent[] = [];

    currPage: number = 0;

    totalPages: number = 0;

    private sortOrder = SortOrder.DESC;

    private sortByType: boolean = false;

    constructor(private eventListService: EventListService,
                private modalService: ModalService,
                private eventComponentService: EventComponentService) {
        eventListService.getTotalCount().subscribe(totalCount => {
            this.totalPages = Math.ceil(totalCount / PAGESIZE);
            if (this.totalPages === 0) {
                this.currPage = -1;
            }
        });
        eventListService.getEvents().subscribe(events => {
            if (events.length === 0 && this.currPage > 0) {
                this.currPage--;
                this.updateData();
            } else {
                this.events = events;
            }
        });
        this.updateData();
    }

    getEventViewType(event: BusinessEvent): any {
        return this.eventComponentService.getEventViewType(event);
    }

    setCurrPage(page: number): void {
        this.currPage = page;
        this.updateData();
    }

    updateData(): void {
        this.updateEvents();
        this.eventListService.countEvents();
    }

    onSort(value: string): void {
        this.sortOrder = SortOrder[value];
        this.updateEvents();
    }

    onGroupByType(checked: boolean): void {
        this.sortByType = checked;
        this.updateEvents();
    }

    openNewEvent(id: string) {
        this.modalService.open(id);
    }

    openEvent(event: BusinessEvent) {
        this.modalService.openEvent(event);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    updateEvents(): void {
        this.eventListService.fetchEvents(this.sortOrder, this.sortByType, this.currPage * PAGESIZE, PAGESIZE);
    }

}
