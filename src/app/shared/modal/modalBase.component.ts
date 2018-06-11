import { ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from 'app/shared/modal/modal.service';


export abstract class ModalBaseComponent implements OnInit, OnDestroy {

    @Input() id: string;

    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
    }

    close(): void {
        this.element.style.display = 'none';
    }

}
