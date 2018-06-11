import { Direction } from 'app/model/direction.model';
import { Currency } from 'app/model/currency.model';
import { BusinessEvent } from 'app/model/businessEvent.model';


export class TransactionEvent extends BusinessEvent {
    
    constructor(_id: string,
                date: Date,
                public description: string,
                public party: string,
                public sum: number,
                public currency: Currency,
                public direction: Direction) {
        super(_id, date);
        this.description = description;
        this.party = party;
        this.sum = sum;
        this.currency = currency;
        this.direction = direction;
    }

    static createEmpty() {
        return new TransactionEvent(null, new Date(), null, null, 0, Currency.RUR, Direction.income);
    }

}
