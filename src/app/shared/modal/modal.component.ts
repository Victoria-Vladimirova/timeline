import { Component, ElementRef, Input } from '@angular/core';

import { ModalService } from 'app/shared/modal/modal.service';
import { ModalBaseComponent } from 'app/shared/modal/modalBase.component';
import { EventListService } from 'app/eventList/eventList.service';
import { EventComponentService } from 'app/events/eventComponent.service';
import { Type } from 'app/model/type.model';
import { BusinessEvent } from 'app/model/businessEvent.model';


@Component({
    selector: 'modal-edit',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends ModalBaseComponent {

    @Input() private selectedType: Type;

    private model: BusinessEvent;

    constructor(modalService: ModalService,
                el: ElementRef,
                private eventListService: EventListService,
                private eventComponentService: EventComponentService) {
        super(modalService, el);
        this.selectedType = this.eventComponentService.getDefaultEditType();
        this.model = this.eventComponentService.createDefaultEditEvent();
    }

    open(): void {
        super.open();
        this.model = this.eventComponentService.createDefaultEditEvent();
    }

    getType(): Type[] {
        return Object.keys(Type)
            .filter(key => typeof Type[key] !== 'number')
            .map(key => Type[key]);
    }

    onSelectedTypeChanged() {
        this.model = this.eventComponentService.createEmptyByType(this.selectedType);
    }

    onAdd(): void {
        this.eventListService.add(this.model);
        super.close();
    }

    getEditComponentType(): any {
        return this.eventComponentService.getEditComponentByType(this.selectedType);
    }

}
