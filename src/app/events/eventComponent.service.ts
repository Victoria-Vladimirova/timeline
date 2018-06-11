import { TransactionItemComponent } from 'app/events/transaction/transactionItem.component';
import { TransactionEditComponent } from 'app/events/transaction/transactionEdit.component';
import { NewsItemComponent } from 'app/events/news/newsItem.component';
import { NewsEditComponent } from 'app/events/news/newsEdit.component';
import EventJSON from 'app/events/eventJSON.model';
import { BusinessEvent } from 'app/model/businessEvent.model';
import { TransactionEvent } from 'app/model/transactionEvent.model';
import { NewsEvent } from 'app/model/newsEvent.model';
import { Currency } from 'app/model/currency.model';
import { Direction } from 'app/model/direction.model';
import { Type } from 'app/model/type.model';


export class EventComponentService {

    getEventViewType(event: BusinessEvent): any {
        if (event instanceof TransactionEvent) {
            return TransactionItemComponent;
        } else if (event instanceof NewsEvent) {
            return NewsItemComponent;
        } else {
            throw new Error('Unknown event type: ' + event);
        }
    }

    decodeEvent(json: EventJSON): BusinessEvent {
        switch (json.type) {
            case 'news':
                return new NewsEvent(
                    json._id,
                    new Date(json.date),
                    json.description,
                    json.title,
                    json.isRead
                );
            case 'transaction':
                return new TransactionEvent(
                    json._id,
                    new Date(json.date),
                    json.description,
                    json.party,
                    json.sum,
                    Currency[json.currency],
                    Direction[json.direction]
                );
            default:
                throw Error('unknown type: ' + json.type);
        }
    }

    createEmptyByType(type: Type): BusinessEvent {
        switch (type) {
            case Type.transaction:
                return TransactionEvent.createEmpty();
            case Type.news:
                return NewsEvent.createEmpty();
            default:
                throw Error('Unknown type: ' + type);
        }

    }

    getEditComponentByType(type: Type): any {
        switch (type) {
            case Type.transaction:
                return TransactionEditComponent;
            case Type.news:
                return NewsEditComponent;
            default:
                throw Error('Unknown type: ' + type);
        }

    }

    getDefaultEditType(): Type {
        return Type.transaction;
    }

    createDefaultEditEvent(): BusinessEvent {
        return TransactionEvent.createEmpty();
    }
}
