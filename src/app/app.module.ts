import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from 'app/app.component';
import { EventListComponent } from 'app/eventList/eventList.component';
import { EventListService } from 'app/eventList/eventList.service';
import { NewsViewComponent } from 'app/events/news/newsView.component';
import { NewsEditComponent } from 'app/events/news/newsEdit.component';
import { NewsItemComponent } from 'app/events/news/newsItem.component';
import { TransactionViewComponent } from 'app/events/transaction/transactionView.component';
import { TransactionItemComponent } from 'app/events/transaction/transactionItem.component';
import { TransactionEditComponent } from 'app/events/transaction/transactionEdit.component';
import { EventComponentService } from 'app/events/eventComponent.service';
import { DclWrapperComponent } from 'app/shared/dcl-wrapper.component';
import { ModalService } from 'app/shared/modal/modal.service';
import { ModalComponent } from 'app/shared/modal/modal.component';


registerLocaleData(localeRu, 'ru');

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    entryComponents: [
        NewsEditComponent,
        TransactionEditComponent,
        NewsItemComponent,
        TransactionItemComponent
    ],
    declarations: [
        AppComponent,
        EventListComponent,
        ModalComponent,
        NewsItemComponent,
        TransactionItemComponent,
        NewsViewComponent,
        TransactionViewComponent,
        NewsEditComponent,
        TransactionEditComponent,
        DclWrapperComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'ru'},
        ModalService,
        EventListService,
        EventComponentService
    ]
})
export class AppModule {}
