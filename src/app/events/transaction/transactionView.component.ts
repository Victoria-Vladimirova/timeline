import { Component, ElementRef } from '@angular/core';

import { ModalService } from 'app/shared/modal/modal.service';
import { EventListService } from "app/eventList/eventList.service";
import { Direction } from "app/model/direction.model";
import { TransactionEvent } from "app/model/transactionEvent.model";
import { ModalBaseComponent } from "app/shared/modal/modalBase.component";


@Component({
    selector: 'modal-transaction-view',
    templateUrl: './transactionView.component.html',
    styleUrls: ['../../shared/modal/modal.component.scss']
})
export class TransactionViewComponent extends ModalBaseComponent {

    private event: any;

    constructor(modalService: ModalService, el: ElementRef, private eventListService: EventListService) {
        super(modalService, el);
    }

    openEvent(event: any): void {
        this.event = event;
        super.open();
    }

    getDirectionFieldName(direction: Direction): string {
        return direction === Direction.income ? 'Сумма зачисления:' : 'Сумма списания:';
    }

    getPartyLabel(direction: Direction): string {
        return direction === Direction.income ? 'От кого:' : 'Кому:';
    }

    onRemove(event: TransactionEvent): void {
        this.eventListService.remove(event);
        super.close();
    }

}
