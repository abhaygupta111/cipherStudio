import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { AddInfoModalComponent } from './pages/add-info-modal/add-info-modal.component';
import { FormsModule } from '@angular/forms';
import { DeteleModalComponent } from './pages/detele-modal/detele-modal.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ShowHypenPipe } from './pipe/show-hypen.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AddInfoModalComponent,
    DeteleModalComponent,
    FilterPipe,
    ShowHypenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
