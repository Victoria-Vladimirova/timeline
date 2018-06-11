import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import EVENTS from 'app/eventList/mock-events';
import { BusinessEvent } from 'app/model/businessEvent.model';
import { EventComponentService } from 'app/events/eventComponent.service';


export enum SortOrder {
    ASC,
    DESC
}

@Injectable()
export class EventListService {

    private events: BehaviorSubject<BusinessEvent[]>;

    private totalCount: BehaviorSubject<number>;

    private eventSource: BusinessEvent[];

    private sortOrder: SortOrder;

    private sortByType: boolean;

    private start: number;

    private limit: number;

    constructor(private eventComponentService: EventComponentService) {
        this.eventSource = EVENTS.map(event => eventComponentService.decodeEvent(event));
        this.events = new BehaviorSubject<BusinessEvent[]>(this.eventSource);
        this.totalCount = new BehaviorSubject<number>(this.eventSource.length);
    }

    getEvents(): Observable<BusinessEvent[]> {
        return this.events.asObservable();
    }

    getTotalCount(): Observable<number> {
        return this.totalCount.asObservable();
    }

    fetchEvents(sortOrder: SortOrder, sortByType: boolean, start: number, limit: number): void {
        this.sortOrder = sortOrder;
        this.sortByType = sortByType;
        this.start = start;
        this.limit = limit;
        this.events.next(this.eventSource.sort((a, b) => {
            if (sortByType && a.constructor.name !== b.constructor.name) {
                return a.constructor.name < b.constructor.name ? -1 : 1;
            }

            const order: number = sortOrder === SortOrder.ASC ? 1 : -1;

            if (a.date === b.date) {
                return 0;
            } else if (a.date > b.date) {
                return order;
            } else {
                return -order;
            }
        }).slice(start, start + limit));
    }

    countEvents(): void {
        this.totalCount.next(this.eventSource.length);
    }

    update(event: BusinessEvent): void {
        const eventIdx = this.eventSource.findIndex(el => el._id === event._id);
        this.eventSource.splice(eventIdx, 1, event);
    }

    remove(event: BusinessEvent): void {
        this.eventSource = this.eventSource.filter(el => el._id !== event._id);
        this.fetchEvents(this.sortOrder, this.sortByType, this.start, this.limit);
        this.countEvents();
    }

    add(event: BusinessEvent) {
        event._id = EventListService.newGuid();
        this.eventSource.push(event);
        this.fetchEvents(this.sortOrder, this.sortByType, this.start, this.limit);
        this.countEvents();
    }

    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}
