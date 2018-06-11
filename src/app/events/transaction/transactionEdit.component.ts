import { Component } from '@angular/core';

import { TransactionEvent } from 'app/model/transactionEvent.model';
import { Currency } from 'app/model/currency.model';
import { Direction } from 'app/model/direction.model';


@Component({
    selector: 'transaction-edit',
    templateUrl: './transactionEdit.component.html',
    styleUrls: ['./transactionEdit.component.scss']
})
export class TransactionEditComponent {

    public model: TransactionEvent;

    getCurrencies(): Currency[] {
        return Object.keys(Currency)
            .filter(key => typeof Currency[key] !== 'number')
            .map(key => Currency[key]);
    }

    getDirection(): Direction[] {
        return Object.keys(Direction)
            .filter(key => typeof Direction[key] !== 'number')
            .map(key => Direction[key]);
    }

    getPartyLabel(direction: Direction): string {
        return direction === Direction.income ? 'От кого' : 'Кому';
    }

}
