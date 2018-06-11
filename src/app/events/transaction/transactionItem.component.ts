import { Component } from '@angular/core';

import { TransactionEvent } from 'app/model/transactionEvent.model';
import { Direction } from 'app/model/direction.model';


@Component({
    selector: 'transaction-item',
    templateUrl: './transactionItem.component.html',
    styleUrls: ['./transactionItem.component.scss']
})
export class TransactionItemComponent {

    public model: TransactionEvent;

    getDirectionSign(direction: Direction): string {
        return direction === Direction.income ? '+' : '-';
    }

    getDirectionClass(direction: Direction): string {
        return direction === Direction.income ? 'income' : 'expense';
    }

    getPartyLabel(direction: Direction): string {
        return direction === Direction.income ? 'От кого:' : 'Кому:';
    }

}
