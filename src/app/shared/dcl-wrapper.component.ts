import {
    AfterViewInit,
    ChangeDetectorRef,
    Compiler,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnChanges,
    OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core'

import { BusinessEvent } from 'app/model/businessEvent.model';


@Component({
    selector: 'dcl-wrapper',
    styleUrls: ['./dcl-wrapper.component.scss'],
    template: `<div #target></div>`
})
export class DclWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {

    @ViewChild('target', { read: ViewContainerRef }) target: any;

    @Input() type: any;

    @Input() model: BusinessEvent;

    cmpRef: ComponentRef<any>;

    private isViewInitialized: boolean = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private compiler: Compiler,
                private cdRef: ChangeDetectorRef) {
    }

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }

        let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);
        this.cmpRef.instance.model = this.model;
        this.cdRef.detectChanges();
    }

    ngOnChanges() {
        this.updateComponent();
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }

}
