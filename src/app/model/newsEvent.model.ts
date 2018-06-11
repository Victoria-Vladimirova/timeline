import { BusinessEvent } from 'app/model/businessEvent.model';


export class NewsEvent extends BusinessEvent {
    
    constructor(_id: string, date: Date, public description: string, public title: string, public isRead: boolean) {
        super(_id, date);
        this.description = description;
        this.title = title;
        this.isRead = isRead;
    }

    static createEmpty() {
        return new NewsEvent(null, new Date(), null, null, false);
    }
    
}